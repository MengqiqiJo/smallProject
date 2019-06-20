import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-primeng-chartjs',
  templateUrl: './primeng-chartjs.component.html',
  styleUrls: ['./primeng-chartjs.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class PrimengChartjsComponent implements OnInit {

	@Input('chartInputData') eachtabcontent: any[];

  constructor() { }

  ngOnInit() {
  }

}
