import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CopyComponent } from '../copy.component';

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

  copyMessage(val: any) {
	  var copyButton = new CopyComponent();
	  copyButton.copyMessage(val);
	}

}
