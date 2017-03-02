import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  public notData: boolean = false;
  data;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.getHomeData().then((res) => {
      console.log("QQQQQ", res);
      this.notData = true;
      this.data = res.data;
    }, (err) => {

    });
  }

}
