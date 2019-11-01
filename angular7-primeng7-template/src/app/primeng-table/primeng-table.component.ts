import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CopyComponent } from '../copy.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-primeng-table',
  templateUrl: './primeng-table.component.html',
  styleUrls: ['./primeng-table.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class PrimengTableComponent implements OnInit {

	// @Input('tableInputData') eachtabcontent: any;

  // get json data
  sectionContent: any;
  primengDataGeneral: any[];

  constructor(private myService: AppService) { }

   // add router
  getChartJSONAndDisplay() {
    this.myService.getTableData().subscribe(data => {
          this.sectionContent = data[0];

      // this.sectionContent.forEach(eachComponent => {
        if (this.sectionContent.componentname == 'primengchartjs') {
          this.primengDataGeneral = this.sectionContent.primengcontentdata;
        }
      // });
    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });
  }

  ngOnInit() {
    this.getChartJSONAndDisplay();
  }

  copyMessage(val: any) {
    this.getChartJSONAndDisplay();
	  var copyButton = new CopyComponent();
	  copyButton.copyMessage(val);
	}

}
