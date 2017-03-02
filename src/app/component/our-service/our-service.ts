import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';

declare const Materialize;
declare let $;

@Component({
  selector: 'our-service',
  styleUrls: ['./our-service.css'],
  templateUrl: './our-service.html'
})

export class OurService implements OnInit {

  public notData: boolean = false;
  public ourService = { };

  public readMode: boolean = true;
  public editMode: boolean = false;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.getHomeData('service').then((res) => {
      this.notData = true;
      this.ourService = {
        data: res.data,
        heading: res.heading,
        list: res.list
      }
      console.log(this.ourService)
    }, (err) => {
      Materialize.toast('Internal Server Error', 4000)
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

  submit(data) {
    console.log("update data", data);
    this.appService.updateData('service', data).then((res) => {
      console.log("res");
      Materialize.toast('Our Service component updated', 4000);
      this.backToReadMode();
    });
  }

}
