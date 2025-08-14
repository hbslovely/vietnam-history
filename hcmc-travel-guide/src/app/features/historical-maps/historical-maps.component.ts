import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HistoricalMap } from '../../shared/models';

@Component({
  selector: 'app-historical-maps',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ImageModule,
    ButtonModule,
    TranslateModule
  ],
  templateUrl: './historical-maps.component.html',
  styleUrls: ['./historical-maps.component.scss']
})
export class HistoricalMapsComponent implements OnInit {
  maps$: Observable<HistoricalMap[]>;

  constructor(private translate: TranslateService) {
    this.maps$ = this.translate.stream('historicalMaps.periods');
  }

  ngOnInit(): void {}
}
