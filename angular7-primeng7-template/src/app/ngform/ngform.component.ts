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
  returnResults: any[]=[];

  constructor(private myService: AppService) {
  }

  save() {
   
    console.log("returnResults1");
    console.log(this.returnResults);


    this.returnResults.forEach(eachResult => {
      eachResult.question_value = this.totalResults[eachResult.question_id];
    });

    console.log("returnResults2");
    console.log(this.returnResults);


  }

  updateChildLevelData(event, currentLevelBlock, availableChildData) {
    console.log(event.value);
    this.childLevelData = this.childData[currentLevelBlock.child];
    var temporaryData = [];
    var parentLevelValue = 0;

    parentLevelValue = currentLevelBlock.fieldValue;
    while(this.parentChildSet[parentLevelValue]) {
      parentLevelValue = this.parentChildSet[parentLevelValue];
      this.totalResults[parentLevelValue] = '';
    }

    this.childLevelData.forEach(eachchildLevelData => {
      if (eachchildLevelData.parent.parentId == event.value) {
        temporaryData.push(eachchildLevelData);
      }
    });

    this.availableData[availableChildData] = temporaryData;
  }


  ngOnInit() {
    var temporaryBlockData;
    var blockReturnOtherValue;
      this.ngFormcomponentData.forEach(eachBlock => {
        temporaryBlockData=null;
        blockReturnOtherValue=null;

        if ((typeof eachBlock.isChild !== 'undefined') && eachBlock.isChild) {
          this.childData[eachBlock.fieldLabel]= eachBlock.data;
        }

        if (eachBlock.child) {
          this.parentChildSet[eachBlock.fieldValue] = eachBlock.childValue;
        }

        
        this.totalResults[eachBlock.fieldValue] = eachBlock.default;

        
        temporaryBlockData = {
          "question_id": eachBlock.fieldValue,
          "question_value": eachBlock.default
        };

        if (eachBlock.returnValue) {
          blockReturnOtherValue = eachBlock.returnValue;
          temporaryBlockData = Object.assign(temporaryBlockData, blockReturnOtherValue);
        }

        this.returnResults.push(temporaryBlockData);

      });
  }

}
