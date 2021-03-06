import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NGFormComponent implements OnInit {

  // @Input('name') ngFormcomponentData: any;

  ngFormcomponentData: any;

  formBasicInfo: any;

  totalResults: any[]=[];
  childData: any[]=[];

  availableData: any[]=[];
  childLevelData: any[];
  parentChildSet: any[]=[];
  returnFormResults: any[]=[];
  returnQuestionsResults: any[]=[];

  constructor(private myService: AppService) {
  }

  save() {
    var temporaryQuestionResult;

    this.returnFormResults.forEach(eachResult => {
      eachResult.field_value =[];
      eachResult.field_value = eachResult.field_value.concat(this.totalResults[eachResult.field_name]);
    });

    this.returnQuestionsResults.forEach(eachQuestion => {
      eachQuestion.question_answer = null;
      eachQuestion.question_answer = this.totalResults[eachQuestion.question_tid];
    });

    // temporaryQuestionResult = {
    //   "field_name": "field_evaluation_reactset",
    //   "field_value": this.returnQuestionsResults
    // };

    // this.returnFormResults.push(temporaryQuestionResult);

    this.returnFormResults.forEach(eachResult => {
      this.formBasicInfo.resultSubmit[eachResult.field_name] = eachResult;
    });

    this.formBasicInfo.resultSubmit["field_evaluation_reactset"] = this.returnQuestionsResults;

    console.log(this.formBasicInfo);
  }

  updateChildLevelData(event, currentLevelBlock, availableChildData) {
    console.log(event.value);
    this.childLevelData = this.childData[currentLevelBlock.child];
    var temporaryData = [];
    var parentLevelValue = 0;

    parentLevelValue = currentLevelBlock.fieldId;
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

  // add router
  getChartJSONAndDisplay() {
    // var temporaryBlockData;
    // var blockReturnOtherValue;
    // var temporaryQuestionData;

    this.myService.getFormData().subscribe(data => {

      this.ngFormcomponentData = data[0];
      this.formBasicInfo = this.ngFormcomponentData.formsBasicInfo;

      this.ngFormcomponentData.primengforms.forEach(eachBlock => {
        var temporaryBlockData=null;
        var blockReturnOtherValue=null;
        var temporaryQuestionData=null;

        if ((typeof eachBlock.isChild !== 'undefined') && eachBlock.isChild) {
          this.childData[eachBlock.fieldLabel]= eachBlock.options;
        }

        if (eachBlock.child) {
          this.parentChildSet[eachBlock.fieldId] = eachBlock.childId;
        }

        this.totalResults[eachBlock.fieldId] = eachBlock.default;

        if (eachBlock.displayType !== "customtext" || eachBlock.displayType !== "customhtml") {
          if (eachBlock.isReactSet) {
            temporaryQuestionData = {
              "question_tid" : eachBlock.fieldId,
              "question_answer": null
            }

            if (eachBlock.returnValue) {
              blockReturnOtherValue = eachBlock.returnValue;
              temporaryQuestionData = Object.assign(temporaryQuestionData, blockReturnOtherValue);
            }

            this.returnQuestionsResults.push(temporaryQuestionData);
          }
          else {
            temporaryBlockData = {
              "field_name": eachBlock.fieldId,
              "field_value": []
            };

            if (eachBlock.returnValue) {
              blockReturnOtherValue = eachBlock.returnValue;
              temporaryBlockData = Object.assign(temporaryBlockData, blockReturnOtherValue);
            }

            this.returnFormResults.push(temporaryBlockData);
          }
        }
      });

    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });
  }

  ngOnInit() {

    this.getChartJSONAndDisplay();
  }

}
