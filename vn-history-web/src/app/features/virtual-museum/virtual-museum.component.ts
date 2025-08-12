import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exhibit } from '../../shared/models';

@Component({
  selector: 'app-virtual-museum',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    GalleriaModule,
    ButtonModule,
    TranslateModule
  ],
  templateUrl: './virtual-museum.component.html',
  styleUrls: ['./virtual-museum.component.scss']
})
export class VirtualMuseumComponent implements OnInit {
  exhibits$: Observable<Exhibit[]>;

  constructor(private translate: TranslateService) {
    this.exhibits$ = this.translate.stream('virtualMuseum.exhibits');
  }

  ngOnInit(): void {}
}
