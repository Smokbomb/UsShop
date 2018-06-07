import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BagService } from '../service/bag.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  constructor(private bagService: BagService, private router: Router
    , private route: ActivatedRoute) { }
  public bagList = [];
  ngOnInit() {
    this.bagService.getBag().subscribe(data => {
      this.bagList = data;
    });
  }

  nextToContent(contentName, index) {
    this.router.navigate(['/content/' + contentName + '/' + index], {
      relativeTo: this.route
    });
  }
}
