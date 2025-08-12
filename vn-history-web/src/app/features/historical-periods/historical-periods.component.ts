import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { RippleModule } from 'primeng/ripple';
import { Observable, map } from 'rxjs';
import { HistoricalPeriod } from '../../shared/models/historical-period.model';
import { HistoricalPeriodsService } from '../../core/services/historical-periods.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarAlt, faLandmark, faScroll, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-historical-periods',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    TabViewModule,
    DividerModule,
    ImageModule,
    RippleModule,
    FontAwesomeModule
  ],
  templateUrl: './historical-periods.component.html',
  styleUrls: ['./historical-periods.component.scss']
})
export class HistoricalPeriodsComponent implements OnInit {
  timelinePeriods$: Observable<{ name: string; timeRange: string; id: string }[]>;
  prehistoricPeriods$: Observable<HistoricalPeriod[]>;
  dynasticPeriods$: Observable<HistoricalPeriod[]>;
  selectedPeriod: HistoricalPeriod | null = null;

  // Icons
  faCalendar = faCalendarAlt;
  faLandmark = faLandmark;
  faScroll = faScroll;
  faArrowRight = faArrowRight;

  constructor(private periodsService: HistoricalPeriodsService) {
    this.timelinePeriods$ = this.periodsService.getTimelinePeriods();
    this.prehistoricPeriods$ = this.periodsService.getPrehistoricPeriods();
    this.dynasticPeriods$ = this.periodsService.getDynasticPeriods();
  }

  ngOnInit(): void {}

  onPeriodSelect(period: HistoricalPeriod): void {
    this.selectedPeriod = period;
  }
}
