import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { database } from 'firebase';

@Injectable()
export class AppService {

  constructor(private af: AngularFire) {

  }

  allData = [];

  getHomeData(urlName) {
    return database().ref(urlName).once('value').then((snapshot) => {
      console.log("AAAAA", snapshot.val());
      return snapshot.val();
    });
  }

  updateData(urlName, updatedData) {
    return database().ref(urlName).update(updatedData).then((res) => {
      console.log("SASASAS", res);
      return res;
    })
  }

}
