import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRobot, faPaperPlane, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ChatGPTService, ChatGPTMessage } from '../../../core/services/chatgpt.service';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

interface ChatMessage {
  content: string;
  isUser: boolean;
  timestamp: Date;
  isError?: boolean;
}

@Component({
  selector: 'app-history-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    AvatarModule,
    RippleModule,
    ProgressSpinnerModule,
    TranslateModule,
    FontAwesomeModule
  ],
  templateUrl: './history-chatbot.component.html',
  styleUrls: ['./history-chatbot.component.scss']
})
export class HistoryChatbotComponent implements OnInit, AfterViewChecked {
  @ViewChild('messageContainer') private messageContainer!: ElementRef;

  faRobot = faRobot;
  faPaperPlane = faPaperPlane;
  faXmark = faXmark;

  isChatOpen = false;
  currentMessage = '';
  messages: ChatMessage[] = [];
  isLoading = false;
  previousGPTMessages: ChatGPTMessage[] = [];

  constructor(
    private chatGPTService: ChatGPTService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    const welcomeMessage = this.translateService.instant('chatbot.welcome');
    this.addBotMessage(welcomeMessage);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  sendMessage(): void {
    if (!this.currentMessage.trim() || this.isLoading) return;

    const userMessage = this.currentMessage;
    this.addUserMessage(userMessage);
    this.currentMessage = '';
    this.isLoading = true;

    // Add user message to GPT context
    const userGPTMessage: ChatGPTMessage = {
      role: 'user',
      content: userMessage
    };
    this.previousGPTMessages.push(userGPTMessage);

    this.chatGPTService.chat(userMessage, this.previousGPTMessages)
      .pipe(
        catchError(error => {
          console.error('ChatGPT API Error:', error);
          return of({
            id: 'error',
            object: 'error',
            created: Date.now(),
            model: 'error',
            choices: [{
              index: 0,
              message: {
                role: 'assistant' as const,
                content: this.translateService.instant('chatbot.error')
              },
              finish_reason: 'error'
            }]
          });
        }),
        finalize(() => {
          this.isLoading = false;
          setTimeout(() => this.scrollToBottom(), 100);
        })
      )
      .subscribe(response => {
        const botMessage: ChatGPTMessage = {
          role: 'assistant',
          content: response.choices[0].message.content
        };
        this.previousGPTMessages.push(botMessage);
        this.addBotMessage(botMessage.content, response.id === 'error');
      });
  }

  private addUserMessage(content: string): void {
    this.messages.push({
      content,
      isUser: true,
      timestamp: new Date()
    });
  }

  private addBotMessage(content: string, isError: boolean = false): void {
    this.messages.push({
      content,
      isUser: false,
      timestamp: new Date(),
      isError
    });
  }

  private scrollToBottom(): void {
    try {
      const element = this.messageContainer.nativeElement;
      element.scrollTop = element.scrollHeight;
    } catch (err) {}
  }
} 