import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './core/services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  translationService = inject(TranslationService);

  getCurrentLanguageName(): string {
    const currentLang = this.translationService.currentLang();
    const language = this.translationService.availableLanguages.find(
      lang => lang.code === currentLang
    );
    return language?.nativeName || '';
  }
}
