import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MyappService } from './myapp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../css/plugin.css', '../../node_modules/primeicons/primeicons.css', '../../node_modules/primeng/resources/themes/omega/theme.css', '../../node_modules/primeng/resources/primeng.min.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  title = 'my-angular6999';

// copy to clipboard
  clipBoardArrayContent: any[];
  clipBoardStringContent: '';

  myCopyClipboard(copyContent) {
    this.clipBoardArrayContent = [];
    this.clipBoardStringContent = '';

    for (var i= copyContent.length - 1; i >= 0; i--) {
      // copyContent[i] = copyContent[i].replace(/<(.|\n)*?>/g, '');
      this.clipBoardArrayContent = Object.values(copyContent[i]);
      this.clipBoardArrayContent[0] = this.clipBoardArrayContent[0].replace(/<(.|\n)*?>/g, '');
      console.log(this.clipBoardArrayContent);
      this.clipBoardStringContent += this.clipBoardArrayContent.join('\t');
      this.clipBoardStringContent += '\n';
    }

    return this.clipBoardStringContent;
  }

  copyMessage(val: any){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.myCopyClipboard(val);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

// get json data
  contentGeneral: any;
  sectionContent: any;
  tableDataGeneral: any[];

  constructor(private myService: MyappService) {}
  getChartJSONAndDisplay() {

    this.myService.getMyJson().subscribe(data => {
      this.sectionContent = data;

      this.contentGeneral = this.sectionContent.contentSection;
      this.tableDataGeneral = this.sectionContent.tablecontent;

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
