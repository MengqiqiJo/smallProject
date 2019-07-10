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
  parentChild: any[]=[];

  constructor(private myService: AppService) {
  }

  save() {
    console.log("total results");
    console.log(this.totalResults);
  }

  updateChildLevelData(event, currentLevelBlock, availableChildData) {
    console.log(event.value);
    this.childLevelData = this.childData[currentLevelBlock.child];
    var temporaryData = [];
    var parentLevelName = '';

    parentLevelName = currentLevelBlock.fieldName;
    while(this.parentChild[parentLevelName]) {
      parentLevelName = this.parentChild[parentLevelName];
      this.totalResults[parentLevelName] = '';
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
          this.childData[eachBlock.fieldName]= eachBlock.data;
        }

        if (eachBlock.child) {
          this.parentChild[eachBlock.fieldName] = eachBlock.child;
        }
        this.totalResults[eachBlock.fieldName] = eachBlock.default;
      });
  }

}
