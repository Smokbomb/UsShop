import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShirtsService } from '../service/shirts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

  constructor(private shirtsService: ShirtsService, private router: Router
    , private route: ActivatedRoute) { }
  public shirtList = [];
  ngOnInit() {
    this.shirtsService.getShirts().subscribe(data => {
      this.shirtList = data;
      console.log(data);
    });
  }

  nextToContent(contentName, index) {
    this.router.navigate(['/content/' + contentName + '/' + index], {
      relativeTo: this.route
    });
  }

}
