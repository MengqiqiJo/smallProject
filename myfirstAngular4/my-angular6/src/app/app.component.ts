import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MyappService } from './myapp.service';
import { CopyComponent } from './app.copycomponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../css/plugin.css', '../../node_modules/primeng/resources/primeng.min.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {

  copyMessage(val: any) {
    var copyButton = new CopyComponent();
    copyButton.copyMessage(val);
  }

  // primeng dialog
  // display: boolean = false;
  // showDialog() {
  //   this.display = true;
  // }

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
    Chart.defaults.global.defaultFontColor = 'red';
    Chart.defaults.global.tooltips = {
      enabled: false
    };
    Chart.defaults.global.tooltipFillColor = 'rgba(0,160,0,0.8)';
    Chart.defaults.global.plugins.labels = {
      fontStyle: 'light',
      render: 'percentage'
      render: function (args) {
        if (args.value > 4) {
          return args.value;
        }
      },
    };
    this.getChartJSONAndDisplay();
    Chart.defaults.scale.ticks.suggestedMin = 10;
  }
}

