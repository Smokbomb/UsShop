import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { AccordionModule } from 'ngx-bootstrap';
import { environment } from '../environments/environment';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { SneakersComponent } from './sneakers/sneakers.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { ArttoyComponent } from './arttoy/arttoy.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ServiceHeaderService } from './service/service-header.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { initServicesIfNeeded } from '@angular/core/src/view';
import { SneakersService } from './service/sneakers.service';
import { ShirtsService } from './service/shirts.service';
import { ArttoyService } from './service/arttoy.service';
import { ContentComponent } from './content/content.component';
import { BagComponent } from './bag/bag.component';
import { BagService } from './service/bag.service';
import { ContentService } from './service/content.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from 'ngx-gallery';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SneakersComponent,
    ShirtsComponent,
    ArttoyComponent,
    ContentComponent,
    BagComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    RatingModule.forRoot(),
    AccordionModule.forRoot(),
    ProgressbarModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,
    HttpModule,
    NgxGalleryModule
  ],
  providers: [
    ServiceHeaderService,
    SneakersService,
    ShirtsService,
    ArttoyService,
    BagService,
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
