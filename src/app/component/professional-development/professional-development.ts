import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { initializeApp, database } from 'firebase';

declare const Materialize;
declare let $;

@Component({
  selector: 'our-service',
  styleUrls: ['./professional-development.css'],
  templateUrl: './professional-development.html'
})

export class ProfessionalDevelopment implements OnInit {

  public notData: boolean = false;
  public profe_dev = { };

  public readMode: boolean = true;
  public editMode: boolean = false;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.getHomeData('professionalDevelopment').then((res) => {
      this.notData = true;
      this.profe_dev = {
        data: res
      }
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
    let data = this.profe_dev["data"];
    this.appService.updateData('professionalDevelopment', data).then((res) => {
      Materialize.toast('Professional Development component updated', 4000);
      this.backToReadMode();
    });
  }

}
