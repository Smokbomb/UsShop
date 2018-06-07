import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentService } from '../service/content.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  constructor(private route: ActivatedRoute, private router: Router, private contentService: ContentService) { }
  public contentName: String = '';
  public index: String = '';
  public contentInfo: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contentName = params['contentName'];
      this.index = params['index'];
    });
    this.contentService.getContent(this.contentName, this.index).subscribe(data => {
      this.contentInfo = data;
      console.log(data);
      this.contentInfo.image.forEach(element => {
        this.galleryImages.push({
          small: element,
          medium: element,
          big: element
        });
      });
    });

    if (window.screen.width <= 600) {
      this.galleryOptions = [
        {
          width: '800px',
          height: '400px',
          thumbnailsColumns: 3,
          imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
          // breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        // max-width 400
        {
          breakpoint: 400,
          preview: false
        }
      ];
    } else {
      this.galleryOptions = [
        {
          width: '800px',
          height: '400px',
          thumbnailsColumns: 3,
          imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
          // breakpoint: 800,
          width: '100%',
          height: '800px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        // max-width 400
        {
          breakpoint: 400,
          preview: false
        }
      ];
    }


  }

}
