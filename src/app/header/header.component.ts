import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ServiceHeaderService } from '../service/service-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public statusMenu = false;
  public statusMenuShop = false;
  public statusMenuSneakers = false;
  public statusMenuBag = false;
  public statusMenuShirts = false;
  public statusMenuArtToy = false;
  public innerWidth = false;
  public strMenuAct = " ";
  constructor(private router: Router) { }

  ngOnInit() {
    if (window.screen.width <= 600) {
      this.innerWidth = true;
    }
    this.statusMenu = false;
    this.checkMenu();
  }
  checkMenu() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.clearMenu();
        if (event.url === '/about') {
          this.statusMenuShop = true;
          this.strMenuAct = " Shop ";
        } else if (event.url === '/sneakers') {
          this.statusMenuSneakers = true;
          this.strMenuAct = " Sneakers ";
        } else if (event.url === '/shirts') {
          this.statusMenuShirts = true;
          this.strMenuAct = " Shirts ";
        } else if (event.url === '/arttoy') {
          this.statusMenuArtToy = true;
          this.strMenuAct = " Art Toy ";
        } else if (event.url === '/bag') {
          this.statusMenuBag = true;
          this.strMenuAct = " Bag ";
        }
      }
    });
  }
  clearMenu() {
    this.statusMenuShop = false;
    this.statusMenuSneakers = false;
    this.statusMenuShirts = false;
    this.statusMenuArtToy = false;
    this.statusMenuBag = false;
  }
  selectMenu() {
    this.statusMenu = !this.statusMenu;
  }
}
