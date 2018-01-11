/*
 * 5 ways to customize the Google Maps infowindow
 * 2015 - en.marnoto.com
 * http://en.marnoto.com/2014/09/5-formas-de-personalizar-infowindow.html
*/
function initialize() {
  $.getJSON( "infoDara.json", function( locations ) {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 5,
      center: {
        lat: -19.3286,
        lng: -43.93888
      }
    });

    var infowindow = new google.maps.InfoWindow();
    var latLngs = new google.maps.LatLng("-19.3286","-43.93888");
    var existingMarker = [latLngs];
    var countMarkers = 0;
    var markers = locations.map(function(location) {

      latLngs = new google.maps.LatLng(location.lat,location.lng);

      for (var i = 1; i < countMarkers; i++) {
        if (latLngs.equals(existingMarker[i])) {
          var newLat = latLngs.lat() + 0.0005;
          var newLng = latLngs.lng();
          latLngs = new google.maps.LatLng(newLat, newLng);
        }
      }
      countMarkers = existingMarker.push(latLngs);

      var marker = new google.maps.Marker({
        position: latLngs
      });

      google.maps.event.addListener(marker, 'click', function(evt) {
        infowindow.setContent(getPopupTemplate(location.subtitle, location.workingField, location.date, location.city, location.eventType, location.speakerName, location.venue, location.attendNum, location.responseNum));
        infowindow.open(map, marker);
      })
      return marker;
    });

    var markerCluster = new MarkerClusterer(map, markers, {
      maxZoom: 9,
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

    // *
    // START INFOWINDOW CUSTOMIZE.
    // The google.maps.event.addListener() event expects
    // the creation of the infowindow HTML structure 'domready'
    // and before the opening of the infowindow, defined styles are applied.
    // *
    google.maps.event.addListener(infowindow, 'domready', function() {

      // Reference to the DIV that wraps the bottom of infowindow
      var iwOuter = $('.gm-style-iw');

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
      if($('.iw-content').height() < 180){
        $('.iw-bottom-gradient').css({display: 'none'});
      }

      // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
      iwCloseBtn.mouseout(function(){
        $(this).css({opacity: '1'});
      });
    });
  });
}
function getPopupTemplate(subtitle, workingField, date, city, eventType, speakerName, venue, attendNum, responseNum) {
  var contentString='<div id="iw-container" class="width-500">'+
                      '<div class="">'+
                        '<h3 class="iw-title">' + subtitle + '</h3>'+
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
                              '<span class="color-199ed5 font-size-16">' + attendNum + '</span>'+
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
                    '</div>'+
                  '</div>';
  return contentString;
}

google.maps.event.addDomListener(window, 'load', initialize);