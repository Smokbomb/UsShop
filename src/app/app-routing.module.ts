import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SneakersComponent } from './sneakers/sneakers.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { ArttoyComponent } from './arttoy/arttoy.component';
import { ContentComponent } from './content/content.component';
import { BagComponent } from './bag/bag.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about', component: AboutComponent,
  },
  {
    path: 'sneakers', component: SneakersComponent ,
  },
  {
    path: 'shirts', component: ShirtsComponent ,
  },
  {
    path: 'arttoy', component: ArttoyComponent ,
  },
  {
    path: 'bag', component: BagComponent ,
  },
  {
    path: 'content/:contentName/:index', component: ContentComponent ,
  },
  // {
  //   path: 'master', component: TransportComponent,
  //   children: [
  //     { path: '', component: MasterStaffListComponent },
  //     { path: 'staff', component: MasterStaffComponent },
  //     { path: 'car-carrier', component: MasterCarCarrierComponent },
  //     { path: 'client', component: MasterClientComponent },
  //     { path: 'office-list', component: MasterOfficeListComponent },
  //     { path: 'office', component: MasterOfficeComponent },
  //     { path: 'point', component: MasterPointComponent },
  //     { path: 'subcontractor', component: MasterSubcontractorComponent },
  //     { path: 'user', component: MasterUserComponent },
  //     { path: 'user-registration', component: MasterUserRegistrationComponent },
  //   ]
  // },

  // {
  //   path: 'transport', component: TransportComponent,
  //   children: [
  //     { path: '', component: TransportTopComponent },
  //     { path: 'transport-list-search', component: TransportListSearchComponent },
  //     { path: 'transport-list-bidding', component: TransportListBiddingComponent },
  //     { path: 'transport-list-successful', component: TransportListSuccessfulComponent },
  //     { path: 'transport-conclude-list', component: TransportConcludeListComponent }
  //   ]
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
  ,
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
