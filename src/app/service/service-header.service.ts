import { Router } from '@angular/router';
import { Injectable, Inject /*Inject api config*/ } from '@angular/core';
import { Http, Response, Headers, ResponseContentType, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ServiceHeaderService {
  static headers = new Headers({ 'Content-Type': 'application/json' });
  coursesObservable: Observable<any[]>;
  constructor(private router: Router, private http: Http) {
  }
  getImageHeader() {
    // console.log(this.http.get("https://tobtab-e723a.firebaseio.com/imageHeader.json").map((data) => data.json()));
    // const Image = '[{"imageName":"https://scontent.fbkk10-1.fna.fbcdn.net/v/t31.0-8/26173678_1389732357820526_4697719563345269369_o.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGWPuQhWanMHnBYq-pP9r8XfCTsJj6WZbPC-Q19aFxYG81ZuLK_64l9OuxiajL5tsekpo2fhXvSFZcb7T3WCuqHK4js9UMGpZQXvzY3p5sJCg&oh=4d19c7c019792860c1bde4a7c8544ba8&oe=5B99D945"},{"imageName":"https://scontent.fbkk10-1.fna.fbcdn.net/v/t31.0-8/24313176_1361425843984511_8852107905699505645_o.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHgxVk-Xi4eF3Jjtnt1V3QhW48IY_Elrnt_NZqMmLMu7khr7TZzqBpi5ZC8oySUh-f7X4vvgWA1ycMY8eQWvYyavlsMEAr1hzqoaG0V3Ag3dA&oh=f3ba39b455b33e4734fdbc36cbd2bbaf&oe=5B874F76"},{"imageName":"https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/15284078_1033038880156544_8322011942863718429_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFJEZ2eT7rdcgYqi_u8G-Hbj1SX6qnpOeUGYpZWQnJnnhpDTvp2dcEePkBMi3S-2QGKpJZAvKJajaVjN-P_SJ6YVM1azj0mJcEl2glZCd8KYg&oh=f6553f2c73630381f4ca662d17937247&oe=5B9A46C2"},{"imageName":"https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/14641954_986207528173013_7187808654641939957_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGSgRJM7YmqrXNSrAIgKafZEet4qUPAOR6uuX57uQWAaz0klu3BS2bTlz7WcdXuancWXegUpubmHz36rhVJvAL3CWikMLV3JxMCoapV7wMU2Q&oh=bbf4046b89f506499b38aff74a9e2a31&oe=5B85DB89"},{"imageName":"https://scontent.fbkk10-1.fna.fbcdn.net/v/t31.0-8/13391464_881110512016049_2546502293979647339_o.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHrwBeKuFBpaSjilvn8F8pqQeuN-iBNzGgPatgqBqJ1YZ94m9HBaTqKzgynQmEOTltPgWIZEhMD0CTbGGQIFhjhNBQevL-ZMeK7Ijff_Pr0hA&oh=e4e6a05d66f3ea4fc61a60ebd01c72bf&oe=5B5620CF"}]';
    return this.http.get(" https://tobtab-e723a.firebaseio.com/imageHeader.json ").map((data) => data.json());

  }
  getImageShop(){
    return this.http.get(" https://tobtab-e723a.firebaseio.com/imageShop.json ").map((data) => data.json());    
  }
}