import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, switchMap } from 'rxjs';
import { HistoricalPeriod } from '../../../shared/models/historical-period.model';
import { HistoricalPeriodsService } from '../../../core/services/historical-periods.service';
import { TimelineModule } from 'primeng/timeline';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-period-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    TabViewModule,
    GalleriaModule,
    TranslateModule,
    TimelineModule,
    DividerModule
  ],
  templateUrl: './period-detail.component.html',
  styleUrls: ['./period-detail.component.scss']
})
export class PeriodDetailComponent implements OnInit {
  periodId: string | null = null;
  periodDetails$: Observable<any>;
  currentLang: string;

  constructor(
    private route: ActivatedRoute,
    private periodsService: HistoricalPeriodsService,
    private translate: TranslateService
  ) {
    this.currentLang = this.translate.currentLang || 'vi';
    
    this.periodDetails$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.periodId = params.get('id');
        return this.periodsService.getPeriodDetails(this.periodId || '');
      })
    );
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  getLocalizedText(obj: any, field: string = ''): string {
    if (!obj) return '';
    if (field) {
      return obj[field]?.[this.currentLang] || obj[field]?.vi || '';
    }
    return obj[this.currentLang] || obj.vi || '';
  }
} 