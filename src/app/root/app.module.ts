import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { OurService } from '../component/our-service/our-service';
import { HomeComponent } from '../component/home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ProfessionalDevelopment } from '../component/professional-development/professional-development';
import { MyGoodSchool } from '../component/my-good-school/school';
import { SchoolAndClient } from '../component/school-and-client/school-and-client';
import { Interns } from '../component/interns/interns';

import { AppService } from '../service/app.service';
import { firebaseConfig } from '../service/firebase.config';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    OurService,
    HomeComponent,
    ProfessionalDevelopment,
    MyGoodSchool,
    SchoolAndClient,
    Interns
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AppService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
