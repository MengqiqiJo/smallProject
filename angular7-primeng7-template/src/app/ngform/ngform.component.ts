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
  returnQuestions: any[]=[];

  constructor(private myService: AppService) {
  }

  save() {

    this.totalResults

    console.log("returnResults1");
    console.log(this.totalResults);

   
    this.returnResults.forEach(eachResult => {
      
      eachResult.field_value =[];
      eachResult.field_value = eachResult.field_value.concat(this.totalResults[eachResult.field_name]);
     

    });

    this.returnQuestions.forEach(eachQuestion => {
     
      eachQuestion.question_value =[];
      eachQuestion.question_value = eachQuestion.question_value.concat(this.totalResults[eachQuestion.question_id]);
     
    });



    this.returnResults["field_evaluation_reactset"]={
      "field_name": "field_evaluation_reactset",
      "field_value": this.returnQuestions
    };

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
    var temporaryQuestionData;
  
      this.ngFormcomponentData.forEach(eachBlock => {
        temporaryBlockData=null;
        blockReturnOtherValue=null;
        temporaryQuestionData=null;

        if ((typeof eachBlock.isChild !== 'undefined') && eachBlock.isChild) {
          this.childData[eachBlock.fieldLabel]= eachBlock.data;
        }

        if (eachBlock.child) {
          this.parentChildSet[eachBlock.fieldValue] = eachBlock.childValue;
        }

        
        this.totalResults[eachBlock.fieldValue] = eachBlock.default;

        if (eachBlock.isQuestion) {
          temporaryQuestionData = {
            "question_id" : eachBlock.fieldValue,
            "question_value": []
          }

          if (eachBlock.returnValue) {
            blockReturnOtherValue = eachBlock.returnValue;
            temporaryQuestionData = Object.assign(temporaryQuestionData, blockReturnOtherValue);
          }

          this.returnQuestions.push(temporaryQuestionData);

        }
        else {
          temporaryBlockData = {
            "field_name": eachBlock.fieldValue,
            "field_value": []
          };

          if (eachBlock.returnValue) {
            blockReturnOtherValue = eachBlock.returnValue;
            temporaryBlockData = Object.assign(temporaryBlockData, blockReturnOtherValue);
          }

          this.returnResults.push(temporaryBlockData);
        }

        

        

      });
  }

}
