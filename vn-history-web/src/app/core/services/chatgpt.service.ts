import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ChatGPTMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface ClaudeMessage {
  role: string;
  content: string;
}

interface ClaudeRequest {
  model: string;
  messages: ClaudeMessage[];
  max_tokens: number;
  temperature: number;
}

interface ClaudeResponse {
  id: string;
  model: string;
  content: {
    text: string;
    type: string;
  }[];
  role: string;
  stop_reason: string;
  stop_sequence: string | null;
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
}

export interface ChatGPTResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: ChatGPTMessage;
    finish_reason: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class ChatGPTService {
  private readonly apiUrl = 'https://api.anthropic.com/v1/messages';
  private readonly systemPrompt = `You are a knowledgeable assistant specializing in Vietnamese history.
  You provide accurate, concise information about Vietnam's historical periods, figures, culture, and heritage sites.
  Your responses should be informative yet engaging, and when relevant, you can suggest related historical sites or figures to explore.
  If you're not certain about specific details, acknowledge this and provide the information you're confident about.
  Please respond in the same language that the user uses to ask the question.`;

  constructor(private http: HttpClient) {}

  chat(userMessage: string, previousMessages: ChatGPTMessage[] = []): Observable<ChatGPTResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': environment.claudeApiKey,
      'anthropic-version': '2023-06-01'
    });

    // Convert previous messages to Claude format
    const claudeMessages: ClaudeMessage[] = [
      { role: 'user', content: this.systemPrompt }
    ];

    // Add previous messages
    previousMessages.forEach(msg => {
      claudeMessages.push({
        role: msg.role === 'assistant' ? 'assistant' : 'user',
        content: msg.content
      });
    });

    // Add current message
    claudeMessages.push({
      role: 'user',
      content: userMessage
    });

    const body: ClaudeRequest = {
      model: 'claude-3-opus-20240229',
      messages: claudeMessages,
      max_tokens: 1000,
      temperature: 0.7
    };

    return this.http.post<ClaudeResponse>(this.apiUrl, body, { headers })
      .pipe(
        map(response => ({
          id: response.id,
          object: 'chat.completion',
          created: Date.now(),
          model: response.model,
          choices: [{
            index: 0,
            message: {
              role: 'assistant',
              content: response.content[0].text
            },
            finish_reason: response.stop_reason
          }]
        }))
      );
  }
}
