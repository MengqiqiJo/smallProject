import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<h2>
  welcome to another component {{name}}
  </h2>
  <h2>
  {{"calculate " + name.length}}
  </h2>
  <h2>
  {{greeting()}}
  </h2>
  <input bind-disabled="true" [id]="myId" type="text" value="JoJo's name">
  <input [disabled]="true" id={{myId}} type="text" value="JoJo's name">
  <h2 [class]="successClass">has error</h2>
  <h2 [class.text-success]="hasError">has error</h2>
  <h2 [ngClass]="messageClasses">has error</h2>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log In</button>

  <h2 *ngIf="displayName; then thenBlock; else elseBlock">if display is true</h2>

  <ng-template #thenBlock>
    <h2>
      if diaplay is then
    </h2>
  </ng-template>
  <ng-template #elseBlock>
    <h2>
      if diaplay is false
    </h2>
  </ng-template>

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">you picked red</div>
    <div *ngSwitchCase="'blue'">you picked blue</div>
    <div *ngSwitchCase="'green'">you picked green</div>
    <div *ngSwitchDefault>Pick again</div>
  </div>

  <div *ngFor="let col of colors; index as i">
    <h2>{{i}} {{col}}</h2>
  </div>

  <div *ngFor="let col of colors; first as f">
    <h2>{{f}} {{col}}</h2>
  </div>

  <div *ngFor="let col of colors; odd as o">
    <h2>{{o}} {{col}}</h2>
  </div>

  `
  ,
  styles: [
    `.text-success {
      color: green;
    }

    .text-danger {
      color: red,
    }
    .text-blue {
      color: blue,
    }

  `]
})
export class TestComponent implements OnInit {

  public name = "jojo";
  public myId= "testId";
  public displayName =true;
  public hasError = false;
  public isSpecial = false;

  public successClass = "text-success";

  public messageClasses = {
    "text-success": this.hasError,
    "text-blue": !this.hasError,
    "text-danger": this.isSpecial
  }

  public color = "red";

  public colors = ["red", "blue", "green", "yellow"];

  constructor() { }

  ngOnInit() {
  }

  greeting() {
    return "great " + this.name;
  }

  logMessage(val) {
    console.log(val);

  }

}
