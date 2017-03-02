import { Routes } from '@angular/router';

import { OurService } from '../component/our-service/our-service';
import { HomeComponent } from '../component/home/home.component';
import { ContactComponent } from '../component/contact/contact.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ourService', component: OurService },
  { path: 'contact', component: ContactComponent }
];

