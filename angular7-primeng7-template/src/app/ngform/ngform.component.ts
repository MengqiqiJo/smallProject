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

  updateChildLevelData(event, childLevelName, availableChildData) {
    console.log(event.value);
    this.childLevelData = this.childData[childLevelName.child];
    var temporaryData = [];

   this.totalResults[childLevelName.child] = '';

   // if (this.parentChild[this.parentChild[childLevelName.child]]) {}
   var childchild = '';

   childchild = childLevelName.child;
    while(this.parentChild[childchild]) {

      console.log("parentChild[childchild]");
      console.log(this.parentChild[childchild]);

      this.totalResults[this.parentChild[childchild]] = '';
      childchild = this.parentChild[childchild];

    }


    console.log("after reset");
    console.log(this.totalResults);




    this.childLevelData.forEach(eachchildLevelData => {


      if (eachchildLevelData.parent.parentId == event.value) {
        // console.log('event value');
        // console.log(event.value);
        // console.log('parent id');
        // console.log(eachchildLevelData.parent.parentId);
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

        if (eachBlock.child) {
          this.parentChild[eachBlock.fieldName] = eachBlock.child;
        }
        this.totalResults[eachBlock.fieldName] = eachBlock.default;
      });

      console.log("child data");
      console.log(this.childData);
      console.log("parent child");
      console.log(this.parentChild);
  }

}
