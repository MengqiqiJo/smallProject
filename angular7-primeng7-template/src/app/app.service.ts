import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// import { NgDrupalSettings } from './app.ngdrupalsettings';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  getJsonFile() {
    return this.http.get('./assets/data/testData.json');

    // var ngDrupalSettings = new NgDrupalSettings();

    // var pathArg = ngDrupalSettings.drupalSettings.path.currentPath.split('/');
    // console.log(pathArg);
    // var section = pathArg.slice(-5)[0].toLowerCase();
    // var entityId = pathArg.slice(-3)[0].toLowerCase();
    // return this.http.get(ngDrupalSettings.drupalSettings.path.baseUrl + 'ngjson/'  + section + '/page/'  + entityId + '/start/end');
  }

}


