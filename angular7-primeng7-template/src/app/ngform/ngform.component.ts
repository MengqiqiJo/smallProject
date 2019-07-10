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
  childData: any[]=[];

  availableData: any[]=[];
  childLevelData: any[];

  constructor(private myService: AppService) {
  }

  save() {
    console.log("total results");
    console.log(this.totalResults);
  }

  updateChildLevelData(event, childLevelName, availableChildData) {
    console.log(event.value);
    this.childLevelData = this.childData[childLevelName];
    var temporaryData = [];

    this.childLevelData.forEach(eachchildLevelData => {


      if (eachchildLevelData.parent.parentId == event.value) {
        console.log('event value');
        console.log(event.value);
        console.log('parent id');
        console.log(eachchildLevelData.parent.parentId);
        temporaryData.push(eachchildLevelData);
      }
    });

    this.availableData[availableChildData] = temporaryData;

    console.log(availableChildData);
    console.log("this is an on change function");
  }


  ngOnInit() {
    console.log("input");
    console.log(this.ngFormcomponentData);
      this.ngFormcomponentData.forEach(eachBlock => {

        if ((typeof eachBlock.isChild !== 'undefined') && eachBlock.isChild) {
          this.childData[eachBlock.fieldName]= eachBlock.data;
        }

        this.totalResults[this.countResult] = eachBlock.default;
        this.countResult++;
      });

      console.log("child data");
      console.log(this.childData);
  }

}
