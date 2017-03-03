import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';

declare const Materialize;
declare let $;

@Component({
  selector: 'our-service',
  styleUrls: ['./school-and-client.css'],
  templateUrl: './school-and-client.html'
})

export class SchoolAndClient implements OnInit {

  public notData: boolean = false;
  public schoolAndClient;

  public readMode: boolean = true;
  public editMode: boolean = false;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.getHomeData('SchoolClient').then((res) => {
      this.notData = true;
      this.schoolAndClient = res;
      console.log(res)
    }, (err) => {
      Materialize.toast('Internal Server Error', 4000);
    });
  }

  edit() {
    this.editMode = true;
    this.readMode = false;
    Materialize.updateTextFields();
    $('#textarea1').val('');
    $('#textarea1').trigger('autoresize');
  }

  backToReadMode() {
    this.editMode = false;
    this.readMode = true;
  }

  submit() {
    console.log("update data", this.schoolAndClient);
    this.appService.updateData('SchoolClient', this.schoolAndClient).then((res) => {
      console.log("res");
      Materialize.toast('School and client component updated', 4000);
      this.backToReadMode();
    });
  }

}
