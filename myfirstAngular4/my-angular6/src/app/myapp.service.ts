import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyappService {

  constructor(private http: HttpClient) {
  }

  getMyJson() {
    return this.http.get('./assets/data/chartData.json');
  }

}


