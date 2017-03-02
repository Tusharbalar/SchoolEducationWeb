import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';

declare const Materialize;

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  public notData: boolean = false;
  public data;
  public title;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.getHomeData().then((res) => {
      this.notData = true;
      this.data = res.data;
      this.title = res.title;
    }, (err) => {
      Materialize.toast('Internal Server Error', 4000)
    });
  }

}
