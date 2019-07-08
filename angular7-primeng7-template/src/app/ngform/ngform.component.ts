import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NGFormComponent implements OnInit {

	@Input('name') ngFormcomponentData: any[];

  ngData: any[];

  totalResults: any[]=[];
  countResult: number = 0;



  constructor(private myService: AppService) {
  }

  save() {
    console.log("total results");
    console.log(this.totalResults);
  }

  ngOnInit() {
    console.log("input");
    console.log(this.ngFormcomponentData);
      this.ngFormcomponentData.forEach(eachBlock => {
        this.totalResults[this.countResult] = eachBlock.default;
        this.countResult++;
      });
  }

}
