import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';

declare const Materialize;
declare let $;

@Component({
  selector: 'my-good-school',
  templateUrl: './school.html'
})

export class MyGoodSchool implements OnInit {

  public notData: boolean = false;
  public myGoodSchool = { };

  public readMode: boolean = true;
  public editMode: boolean = false;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.getHomeData('myGoodSchool').then((res) => {
      this.notData = true;
      this.myGoodSchool = {
        data: res.data
      }
      console.log(this.myGoodSchool)
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
    this.appService.updateData('myGoodSchool', data).then((res) => {
      console.log("res");
      Materialize.toast('My Good School component updated', 4000);
      this.backToReadMode();
    });
  }

}
