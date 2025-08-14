import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsCategory } from '../../shared/models';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    DataViewModule,
    ButtonModule,
    ChipModule,
    TranslateModule
  ],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  categories$: Observable<NewsCategory[]>;

  constructor(private translate: TranslateService) {
    this.categories$ = this.translate.stream('news.categories').pipe(
      map(categories => categories || [])
    );
  }

  ngOnInit(): void {}
}
