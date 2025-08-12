import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CultureItem } from '../../../shared/models';

@Component({
  selector: 'app-culture-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    TabViewModule,
    GalleriaModule,
    TranslateModule
  ],
  templateUrl: './culture-detail.component.html',
  styleUrls: ['./culture-detail.component.scss']
})
export class CultureDetailComponent implements OnInit {
  item$: Observable<CultureItem | undefined>;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.item$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => 
        this.translate.stream('culture.categories').pipe(
          map(categories => {
            let foundItem: CultureItem | undefined;
            categories?.forEach((category: any) => {
              const item = category.items?.find((i: CultureItem) => i.id === id);
              if (item) foundItem = item;
            });
            return foundItem;
          })
        )
      )
    );
  }

  ngOnInit(): void {}
} 