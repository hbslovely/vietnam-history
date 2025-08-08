import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <h1>{{ 'TITLE' | translate }}</h1>
      <button (click)="switchLang('vi')">Tiếng Việt</button>
      <button (click)="switchLang('en')">English</button>
      <app-history></app-history>
    </div>
  `,
  styles: []
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('vi');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|vi/) ? browserLang : 'vi');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}