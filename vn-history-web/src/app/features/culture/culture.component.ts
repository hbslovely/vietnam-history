import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { CultureCategory } from '../../shared/models';

@Component({
  selector: 'app-culture',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    TabViewModule,
    ButtonModule,
    TranslateModule
  ],
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnInit {
  categories$: Observable<CultureCategory[]>;

  constructor(private translate: TranslateService) {
    this.categories$ = this.translate.stream('culture.categories');
  }

  ngOnInit(): void {}
}
