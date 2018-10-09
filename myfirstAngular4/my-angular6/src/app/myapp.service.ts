import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class MyappService {

  constructor(private http: HttpClient) {
  }

  getMyJson() {
    return this.http.get('./assets/data/chartData.json');
  }

  getCarsSmall() {
    return this.http.get('./assets/data/cars-small.json');
    }

}


