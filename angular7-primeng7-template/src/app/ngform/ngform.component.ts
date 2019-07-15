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
  childData: any[]=[];

  availableData: any[]=[];
  childLevelData: any[];
  parentChildSet: any[]=[];

  constructor(private myService: AppService) {
  }

  save() {
    console.log("total results");
    console.log(this.totalResults);
  }

  updateChildLevelData(event, currentLevelBlock, availableChildData) {

    console.log("-------------------------availableChildData----------------------------");
    console.log(availableChildData);
    console.log("-------------------------availableChildData----------------------------");
    

    console.log(event.value);
    this.childLevelData = this.childData[currentLevelBlock.child];
    var temporaryData = [];
    var parentLevelValue = 0;
    this.availableData = [];

    parentLevelValue = currentLevelBlock.fieldValue;
    while(this.parentChildSet[parentLevelValue]) {
      parentLevelValue = this.parentChildSet[parentLevelValue];
      this.totalResults[parentLevelValue] = '';
    }


    console.log("after reset");
    console.log(this.totalResults);


    this.childLevelData.forEach(eachchildLevelData => {
      if (eachchildLevelData.parent.parentId == event.value) {
        temporaryData.push(eachchildLevelData);
      }
    });

    this.availableData[availableChildData] = temporaryData;
  }


  ngOnInit() {
      this.ngFormcomponentData.forEach(eachBlock => {

        if ((typeof eachBlock.isChild !== 'undefined') && eachBlock.isChild) {
          this.childData[eachBlock.fieldLabel]= eachBlock.data;
        }

        if (eachBlock.child) {
          this.parentChildSet[eachBlock.fieldValue] = eachBlock.childValue;
        }
        this.totalResults[eachBlock.fieldValue] = eachBlock.default;
      });
  }

}
