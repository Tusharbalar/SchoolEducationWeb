import { Routes } from '@angular/router';

import { OurService } from '../component/our-service/our-service';
import { HomeComponent } from '../component/home/home.component';
import { ProfessionalDevelopment } from '../component/professional-development/professional-development';
import { MyGoodSchool } from '../component/my-good-school/school';
import { SchoolAndClient } from '../component/school-and-client/school-and-client';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ourService', component: OurService },
  { path: 'myGoodSchool', component: MyGoodSchool },
  { path: 'professionalDevelopment', component: ProfessionalDevelopment },
  { path: 'schoolAndClient', component: SchoolAndClient }
];

