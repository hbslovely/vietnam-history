import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { 
  faBars, 
  faHome, 
  faLandmark, 
  faUsers, 
  faMapLocationDot, 
  faCube, 
  faNewspaper, 
  faBook, 
  faImages 
} from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '../../models';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { HistoryChatbotComponent } from '../history-chatbot/history-chatbot.component';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
    FontAwesomeModule,
    TranslateModule,
    LanguageSwitcherComponent,
    HistoryChatbotComponent
  ],
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  sidebarVisible = false;
  faBars = faBars;

  menuItems: MenuItem[] = [
    { path: '/', labelKey: 'nav.home', icon: faHome },
    { path: '/historical-periods', labelKey: 'nav.historicalPeriods', icon: faBook },
    { path: '/historical-figures', labelKey: 'nav.historicalFigures', icon: faUsers },
    { path: '/historical-sites', labelKey: 'nav.historicalSites', icon: faLandmark },
    { path: '/culture', labelKey: 'nav.culture', icon: faCube },
    { path: '/virtual-museum', labelKey: 'nav.virtualMuseum', icon: faImages },
    { path: '/historical-maps', labelKey: 'nav.historicalMaps', icon: faMapLocationDot },
    { path: '/news', labelKey: 'nav.news', icon: faNewspaper }
  ];

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  closeSidebar(): void {
    this.sidebarVisible = false;
  }
} 