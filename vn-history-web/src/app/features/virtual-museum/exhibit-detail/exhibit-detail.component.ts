import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Exhibit } from '../../../shared/models';

@Component({
  selector: 'app-exhibit-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    TabViewModule,
    GalleriaModule,
    ButtonModule,
    TranslateModule
  ],
  templateUrl: './exhibit-detail.component.html',
  styleUrls: ['./exhibit-detail.component.scss']
})
export class ExhibitDetailComponent implements OnInit {
  exhibit$: Observable<Exhibit | undefined>;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.exhibit$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => 
        this.translate.stream('virtualMuseum.exhibits').pipe(
          map(exhibits => exhibits?.find((e: Exhibit) => e.id === id))
        )
      )
    );
  }

  ngOnInit(): void {}

  openVirtualTour(url: string): void {
    window.open(url, '_blank');
  }
} 