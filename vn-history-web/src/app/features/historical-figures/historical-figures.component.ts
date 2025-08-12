import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { FigureCategory } from '../../shared/models';

@Component({
  selector: 'app-historical-figures',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    DataViewModule,
    ButtonModule,
    TranslateModule
  ],
  templateUrl: './historical-figures.component.html',
  styleUrls: ['./historical-figures.component.scss']
})
export class HistoricalFiguresComponent implements OnInit {
  categories$: Observable<FigureCategory[]>;

  constructor(private translate: TranslateService) {
    this.categories$ = this.translate.stream('historicalFigures.categories');
  }

  ngOnInit(): void {}
}
