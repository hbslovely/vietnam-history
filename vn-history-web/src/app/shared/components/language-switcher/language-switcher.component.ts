import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RippleModule } from 'primeng/ripple';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, ButtonModule, OverlayPanelModule, RippleModule, TranslateModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  languages: Language[] = [
    {
      code: 'en',
      name: 'English',
      flag: '/assets/images/flags/en.png'
    },
    {
      code: 'vi',
      name: 'Tiếng Việt',
      flag: '/assets/images/flags/vi.png'
    },
    {
      code: 'ja',
      name: '日本語',
      flag: '/assets/images/flags/ja.png'
    },
    {
      code: 'ko',
      name: '한국어',
      flag: '/assets/images/flags/ko.png'
    },
    {
      code: 'zh',
      name: '中文',
      flag: '/assets/images/flags/zh.png'
    }
  ];

  constructor(private translateService: TranslateService) {}

  getCurrentLanguage(): Language {
    const currentLang = this.translateService.currentLang || 'en';
    return this.languages.find(lang => lang.code === currentLang) || this.languages[0];
  }

  switchLanguage(langCode: string): void {
    this.translateService.use(langCode);
  }
}
