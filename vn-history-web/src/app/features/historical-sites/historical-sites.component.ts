import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HistoricalSite } from '../../shared/models';

@Component({
  selector: 'app-historical-sites',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    DataViewModule,
    ButtonModule,
    TranslateModule
  ],
  templateUrl: './historical-sites.component.html',
  styleUrls: ['./historical-sites.component.scss']
})
export class HistoricalSitesComponent implements OnInit {
  sites$: Observable<HistoricalSite[]>;

  constructor(private translate: TranslateService) {
    this.sites$ = this.translate.stream('historicalSites.sites').pipe(
      map(sites => sites || [])
    );
  }

  ngOnInit(): void {}
}
