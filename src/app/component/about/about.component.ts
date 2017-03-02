import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';

declare const Materialize;

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit {

  public notData: boolean = false;
  public data = { };

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.getHomeData('service').then((res) => {
      this.notData = true;
      this.data = {
        ourService: res.data,
        heading: res.heading,
        list: res.list
      }
      console.log(this.data)
    }, (err) => {
      Materialize.toast('Internal Server Error', 4000)
    });
  }

  edit() {
    console.log("Edit")
  }
}
