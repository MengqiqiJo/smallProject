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
  title = 'my-angular6999';

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

  options: any;
  overlays: any[];
  infoWindow: any;
  contentString: '';

  markerCluster: any;

  map: google.maps.Map;

  setMap(event) {
    this.map = event.map;
    this.markerCluster = new MarkerClusterer(this.map, this.overlays, {
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
  }

  ngOnInit() {
    this.getChartJSONAndDisplay();

    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
    };

    this.overlays = [
      new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
      new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
      new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"})
    ];

    this.infoWindow = new google.maps.InfoWindow();
  }

  mapPopUpTemplate(title) {
    this.contentString = '<div class="width-500 height-52 bg-009ddf">'+
        '<h3 class="color-000">' + title + '</h3>'+
        '</div>';
  }

  handleOverlayClick(event) {
    let isMarker = event.overlay.getTitle != undefined;

    if(isMarker) {
       let title = event.overlay.getTitle();
       this.mapPopUpTemplate('' + title + '22');
       this.infoWindow.setContent(this.contentString);
       this.infoWindow.open(event.map, event.overlay);
       event.map.setCenter(event.overlay.getPosition());
    }
    else {
      console.log("handle over lay click");
    }
  }


}
