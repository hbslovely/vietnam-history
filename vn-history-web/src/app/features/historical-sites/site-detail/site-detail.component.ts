import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { MessageModule } from 'primeng/message';
import { TranslateModule } from '@ngx-translate/core';
import { HistoricalSite } from '../../../shared/models/historical-site.model';

@Component({
  selector: 'app-site-detail',
  standalone: true,
  imports: [
    CommonModule,
    GalleriaModule,
    MessageModule,
    TranslateModule
  ],
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.scss']
})
export class SiteDetailComponent implements OnInit {
  site?: HistoricalSite;
  
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // TODO: Replace with actual API call
    this.site = {
      id: '1',
      name: 'Văn Miếu - Quốc Tử Giám',
      location: {
        province: 'Hà Nội',
        district: 'Đống Đa',
        address: '58 Quốc Tử Giám, Đống Đa, Hà Nội',
        coordinates: {
          latitude: 21.0293,
          longitude: 105.8367
        }
      },
      type: 'temple',
      period: {
        from: 1070,
        dynasty: 'Lý'
      },
      description: 'Văn Miếu - Quốc Tử Giám là quần thể di tích đa dạng, phong phú, gồm kiến trúc, bia đá, hiện vật...',
      recognition: {
        level: 'special-national',
        year: 1990
      },
      history: 'Văn Miếu được xây dựng vào năm 1070 dưới triều vua Lý Thánh Tông...',
      architecture: 'Quần thể kiến trúc Văn Miếu - Quốc Tử Giám được xây dựng theo trục thẳng từ nam đến bắc...',
      significance: 'Là biểu tượng của nền giáo dục Việt Nam, nơi tôn vinh các giá trị Nho giáo và trí tuệ...',
      visitingInfo: {
        address: '58 Quốc Tử Giám, Đống Đa, Hà Nội',
        openingHours: '7:30 - 17:30 hàng ngày',
        ticketPrice: '30.000 VND',
        contact: '024 3747 2566',
        transportation: 'Xe bus số 8, 9, 14, 23'
      },
      images: [
        '/assets/images/historical-sites/van-mieu/1.jpg',
        '/assets/images/historical-sites/van-mieu/2.jpg',
        '/assets/images/historical-sites/van-mieu/3.jpg'
      ]
    };
  }
} 