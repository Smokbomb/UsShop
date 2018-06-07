import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SneakersService } from '../service/sneakers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css']
})
export class SneakersComponent implements OnInit {

  constructor(private sneakersService: SneakersService, private router: Router
    , private route: ActivatedRoute) { }
  public sneakerList = [];
  ngOnInit() {
    this.sneakersService.getSneakers().subscribe(data => {
      this.sneakerList = data;
      console.log(this.sneakerList);
    });
  }

  nextToContent(contentName, index) {
    this.router.navigate(['/content/' + contentName + '/' + index], {
      relativeTo: this.route
    });
  }

}
