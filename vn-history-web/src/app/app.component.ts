import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavMenuComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private translateService: TranslateService
  ) {
    // Initialize PrimeNG config
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100
    };

    // Initialize translations
    this.translateService.setDefaultLang('vi');
    this.translateService.use('vi');
  }

  ngOnInit() {
    // Load translations for PrimeNG components
    this.translateService.get('primeng').subscribe(res => {
      this.primengConfig.setTranslation(res);
    });
  }
}
