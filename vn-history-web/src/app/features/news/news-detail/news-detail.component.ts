import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { GalleriaModule } from 'primeng/galleria';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { NewsItem } from '../../../shared/models';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ChipModule,
    GalleriaModule,
    TranslateModule
  ],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  newsItem$: Observable<NewsItem | undefined>;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.newsItem$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => 
        this.translate.stream('news.categories').pipe(
          map(categories => {
            const allNews: NewsItem[] = [];
            categories?.forEach((category: any) => {
              if (category.news) {
                allNews.push(...category.news);
              }
            });
            return allNews.find(item => item.id === id);
          })
        )
      )
    );
  }

  ngOnInit(): void {}
} 