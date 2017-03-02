import { Routes } from '@angular/router';

import { AboutComponent } from '../component/about/about.component';
import { HomeComponent } from '../component/home/home.component';
import { ContactComponent } from '../component/contact/contact.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

