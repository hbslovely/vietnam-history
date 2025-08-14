import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';
import { ChipModule } from 'primeng/chip';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HistoricalFigure } from '../../../shared/models';

@Component({
  selector: 'app-figure-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    TabViewModule,
    GalleriaModule,
    ChipModule,
    TranslateModule
  ],
  templateUrl: './figure-detail.component.html',
  styleUrls: ['./figure-detail.component.scss']
})
export class FigureDetailComponent implements OnInit {
  figure$: Observable<HistoricalFigure | undefined>;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.figure$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => 
        this.translate.stream('historicalFigures.categories').pipe(
          map(categories => {
            let foundFigure: HistoricalFigure | undefined;
            categories?.forEach((category: any) => {
              const figure = category.figures?.find((f: HistoricalFigure) => f.id === id);
              if (figure) foundFigure = figure;
            });
            return foundFigure;
          })
        )
      )
    );
  }

  ngOnInit(): void {}
} 