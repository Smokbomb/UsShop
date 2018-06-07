import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SneakersService } from '../service/sneakers.service';
import { ShirtsService } from '../service/shirts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceHeaderService } from '../service/service-header.service';
import { BagService } from '../service/bag.service';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('img', style({ transform: 'translateX(-100%)' })),
        query('img',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)' }))
          ]))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  constructor(private serviceHeaderService: ServiceHeaderService
    , private sneakersService: SneakersService
    , private shirtsService: ShirtsService
    , private bagService: BagService
    , private router: Router
    , private route: ActivatedRoute) { }
  public shopList = [];
  public shirtList = [];
  public imageName = [];
  public bagList = [];

  ngOnInit() {
    this.serviceHeaderService.getImageHeader().subscribe(data => {
      this.imageName = data;
    });
    this.serviceHeaderService.getImageShop().subscribe(data => {
      this.shopList = data;
      console.log(data);
    });
  }
  nextToContent(contentName, index) {
    this.router.navigate(['/content/' + contentName + '/' + index], {
      relativeTo: this.route
    });
  }
}
