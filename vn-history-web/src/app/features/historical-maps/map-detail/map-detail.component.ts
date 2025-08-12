import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HistoricalMap } from '../../../shared/models';

@Component({
  selector: 'app-map-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    TabViewModule,
    GalleriaModule,
    TranslateModule
  ],
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements OnInit {
  map$: Observable<HistoricalMap | undefined>;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.map$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => 
        this.translate.stream('historicalMaps.periods').pipe(
          map(periods => periods?.find((p: HistoricalMap) => p.id === id))
        )
      )
    );
  }

  ngOnInit(): void {}
} 