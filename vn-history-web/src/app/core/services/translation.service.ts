import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

export type Language = {
  code: string;
  name: string;
  nativeName: string;
};

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly STORAGE_KEY = 'selectedLanguage';
  private platformId = inject(PLATFORM_ID);
  
  readonly availableLanguages: Language[] = [
    { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'zh', name: 'Chinese', nativeName: '中文' },
    { code: 'ko', name: 'Korean', nativeName: '한국어' }
  ];

  currentLang = signal<string>('vi');

  constructor(private translate: TranslateService) {
    // Initialize with stored language or default to Vietnamese
    const storedLang = this.getStoredLanguage();
    this.setLanguage(storedLang || 'vi');
    
    // Set available languages
    translate.addLangs(this.availableLanguages.map(lang => lang.code));
    translate.setDefaultLang('vi');
  }

  private getStoredLanguage(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.STORAGE_KEY);
    }
    return null;
  }

  private setStoredLanguage(lang: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, lang);
    }
  }

  setLanguage(langCode: string) {
    if (this.availableLanguages.find(lang => lang.code === langCode)) {
      this.translate.use(langCode);
      this.currentLang.set(langCode);
      this.setStoredLanguage(langCode);
      
      if (isPlatformBrowser(this.platformId)) {
        document.documentElement.lang = langCode;
        this.updateFontClass(langCode);
      }
    }
  }

  private updateFontClass(langCode: string) {
    if (isPlatformBrowser(this.platformId)) {
      // Remove all language classes
      document.body.classList.remove('lang-vi', 'lang-ja', 'lang-zh', 'lang-ko');
      // Add the appropriate language class
      document.body.classList.add(`lang-${langCode}`);
    }
  }
} 