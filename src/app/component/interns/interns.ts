import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';

declare const Materialize;
declare let $;

@Component({
  selector: 'interns',
  styleUrls: ['./interns.css'],
  templateUrl: './interns.html'
})

export class Interns implements OnInit {

  public notData: boolean = false;
  public interns = [];

  public readMode: boolean = true;
  public editMode: boolean = false;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.getHomeData('interns-new').then((res) => {
      this.notData = true;
      console.log(res);
      this.interns = res;
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

  submit(data) {
    this.appService.updateData('interns-new', this.interns).then((res) => {
      console.log("res");
      Materialize.toast('My Good School component updated', 4000);
      this.backToReadMode();
    });
  }

}
