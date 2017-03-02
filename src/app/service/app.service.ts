import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { database } from 'firebase';

@Injectable()
export class AppService {

  constructor(private af: AngularFire) {

  }

  allData = [];

  getHomeData() {
    return database().ref('home').once('value').then((snapshot) => {
      console.log("AAAAA", snapshot.val());
      return snapshot.val();
    });
  }

}
