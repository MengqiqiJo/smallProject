import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-primeng-table',
  templateUrl: './primeng-table.component.html',
  styleUrls: ['./primeng-table.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class PrimengTableComponent implements OnInit {

	@Input('tableInputData') eachtabcontent: any;

  constructor() { }

  ngOnInit() {
  }

}
