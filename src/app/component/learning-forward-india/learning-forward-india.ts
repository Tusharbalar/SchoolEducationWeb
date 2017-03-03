import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';

declare const Materialize;
declare let $;

@Component({
  selector: 'learning-forward-india',
  styleUrls: ['./learning-forward-india.css'],
  templateUrl: './learning-forward-india.html'
})

export class LearningForwardIndia implements OnInit {

  public notData: boolean = false;
  public learning_india = [];

  public readMode: boolean = true;
  public editMode: boolean = false;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.getHomeData('learning-forward-india').then((res) => {
      this.notData = true;
      console.log(res);
      this.learning_india = res;
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
    this.appService.updateData('learning-forward-india', this.learning_india).then((res) => {
      Materialize.toast('Learning forward india component updated', 4000);
      this.backToReadMode();
    });
  }

}
