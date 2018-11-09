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
      new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti", attendance:"100"}),
      new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park", attendance:"110"}),
      new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown", attendance:"120"})
    ];

    this.infoWindow = new google.maps.InfoWindow();

    google.maps.event.addListener(this.infoWindow, 'domready', function() {

      // Reference to the DIV that wraps the bottom of infowindow
      var iwOuter = jQuery('.gm-style-iw');

      /* Since this div is in a position prior to .gm-div style-iw.
      * We use jQuery and create a iwBackground variable,
      * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
      */
      var iwBackground = iwOuter.prev();

      // Removes background shadow DIV
      iwBackground.children(':nth-child(2)').css({'display': 'none'});

      // Removes white background DIV
      iwBackground.children(':nth-child(4)').css({'display': 'none'});

      // Moves the infowindow 115px to the right.
      iwOuter.parent().parent().css({left: '14px'});

      // Moves the shadow of the arrow 76px to the left margin.
      iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 250px !important;'});

      // Moves the arrow 76px to the left margin.
      iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 250px !important;'});

      // Changes the desired tail shadow color.
      iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index': '1'});

      // Reference to the div that groups the close button elements.
      var iwCloseBtn = iwOuter.next();

      // Apply the desired effect to the close button
      iwCloseBtn.css({opacity: '1', left: '470px', top: '26px'});

      // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
      if(jQuery('.iw-content').height() < 180){
        jQuery('.iw-bottom-gradient').css({display: 'none'});
      }

      // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
      iwCloseBtn.mouseout(function(){
        jQuery(this).css({opacity: '1'});
      });
    });
  }

  mapPopUpTemplate(title, workingField, date, city, eventType, speakerName, venue, attendance, responseNum) {
    this.contentString = '<div id="iw-container" class="width-500">'+
                            '<div class="">'+
                              '<h3 class="iw-title">' + title + '</h3>'+
                            '</div>'+
                            '<div class="iw-content width-460">'+
                              '<div class="row margin-top-10">'+
                                '<div class="col-md-4">'+
                                  '<div>'+
                                    '<i class="fa fa-bookmark color-199ed5"></i>'+
                                    '<span class="padding-left-6">' + workingField + '</span>'+
                                  '</div>'+
                                '</div>'+
                                '<div class="col-md-4">'+
                                  '<i class="fa fa-calendar-o color-199ed5"></i>'+
                                  '<span class="padding-left-6">' + date + '</span>'+
                                '</div>'+
                                '<div class="col-md-4">'+
                                  '<i class="fa fa-map-marker color-199ed5"></i>'+
                                  '<span class="padding-left-6">' + city + '</span>'+
                                '</div>'+
                              '</div>'+
                              '<div class="margin-top-16">'+
                                '<span> Event Type: </span>'+
                                '<span>' + eventType + '</span>'+
                              '</div>'+
                              '<div class="margin-top-16">'+
                                '<span>Speaker: </span>'+
                                '<span>' + speakerName + '</span>'+
                              '</div>'+
                              '<div class="margin-top-16">'+
                                '<span>Venue: </span>'+
                                '<span>' + venue + '</span>'+
                              '</div>'+
                              '<div class="row margin-top-20">'+
                                '<div class="col-md-6 text-align-center">'+
                                  '<div>'+
                                    '<span>ATTENDEES</span>'+
                                  '</div>'+
                                  '<div>'+
                                    '<span class="color-199ed5 font-size-16">' + attendance + '</span>'+
                                  '</div>'+
                                '</div>'+
                                '<div class="col-md-6 text-align-center">'+
                                  '<div>'+
                                    '<span>RESPONSES</span>'+
                                  '</div>'+
                                  '<div>'+
                                    '<span class="color-199ed5 font-size-16">' + responseNum + '</span>'+
                                  '</div>'+
                                '</div>'+
                              '</div>'+
                            '</div>'+
                          '</div>';
  }

  handleOverlayClick(event) {
    let isMarker = event.overlay.getTitle != undefined;
    if(isMarker) {
       let title = event.overlay.getTitle();
       let attendance = event.overlay.attendance;
       this.mapPopUpTemplate(title, "workingField", "2018-10-11", "windsor", "OLA", "jOSEPH", "the Chantrelle", attendance, "10");
       this.infoWindow.setContent(this.contentString);
       this.infoWindow.open(event.map, event.overlay);
       event.map.setCenter(event.overlay.getPosition());
    }
    else {
      console.log("handle over lay click");
    }
  }

}
