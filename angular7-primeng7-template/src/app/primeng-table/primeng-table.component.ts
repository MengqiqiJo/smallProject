import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primeng-table',
  templateUrl: './primeng-table.component.html',
  styleUrls: ['./primeng-table.component.css']
})
export class PrimengTableComponent implements OnInit {

	@Input('tableInputData') eachtabcontent: any;

  constructor() { }

  ngOnInit() {
  }

}
