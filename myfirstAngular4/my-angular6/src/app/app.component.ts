import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MyappService } from './myapp.service';

import { CopyComponent } from './app.copycomponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../css/plugin.css', '../../node_modules/primeicons/primeicons.css', '../../node_modules/primeng/resources/themes/omega/theme.css', '../../node_modules/primeng/resources/primeng.min.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {

  copyMessage(val: any) {
    var copyButton = new CopyComponent();
    copyButton.copyMessage(val);
  }

// get json data
  sectionContent: any;
  primengDataGeneral: any[];

  constructor(private myService: MyappService) {}
  getChartJSONAndDisplay() {

    this.myService.getMyJson().subscribe(data => {
      this.sectionContent = data;
      this.primengDataGeneral = this.sectionContent.primengcontentdata;

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
