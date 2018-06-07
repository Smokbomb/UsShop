import { Router } from '@angular/router';
import { Injectable, Inject /*Inject api config*/ } from '@angular/core';
import { Http, Response, Headers, ResponseContentType, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SneakersService {
  static headers = new Headers({ 'Content-Type': 'application/json' });
  coursesObservable: Observable<any[]>;
  constructor(private router: Router, private http: Http) {
  }
  getSneakers() {
    return this.http.get(" https://tobtab-e723a.firebaseio.com/sneakersInfo.json ").map((data) => data.json());
  }


  getSneakerShop() {
    return this.http.get(" https://tobtab-e723a.firebaseio.com/imageSneakerShop.json ").map((data) => data.json());
  }
}
