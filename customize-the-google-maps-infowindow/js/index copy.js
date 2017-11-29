/*
 * 5 ways to customize the Google Maps infowindow
 * 2015 - en.marnoto.com
 * http://en.marnoto.com/2014/09/5-formas-de-personalizar-infowindow.html
*/

var map;
function initialize() {

var map = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom: 5,
            center: {
              lat: -15.7942357,
              lng: -47.8821945
            }
          });
var script = document.createElement('script');
script.src = 'coordinatedata.js';
document.getElementsByTagName('head')[0].appendChild(script);
}

window.eqfeed_callback = function(locations) {

  // A new Info Window is created and set content
  var infowindow = new google.maps.InfoWindow({
    // Assign a maximum value for the width of the infowindow allows
    // greater control over the various content elements
    maxWidth: 350
  });
  var markers = locations.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location
    });

    google.maps.event.addListener(marker, 'click', function(evt) {
      infowindow.setContent(location.info);
      infowindow.open(map, marker);
    })
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers, {
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
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

    // Moves the infowindow 115px to the right.
    iwOuter.parent().parent().css({left: '115px'});

    // Moves the shadow of the arrow 76px to the left margin.
    iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Moves the arrow 76px to the left margin.
    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Changes the desired tail shadow color.
    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next();

    // Apply the desired effect to the close button
    iwCloseBtn.css({opacity: '1', right: '38px', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});

    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    if($('.iw-content').height() < 180){
      $('.iw-bottom-gradient').css({display: 'none'});
    }

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '1'});
    });
  });
}

var contentString='<div id="iw-container" class="width-460">'+
        '<div class="">'+
        '<h3 class="iw-title">Program Name</h3>'+
        '</div>'+
        '<div class="iw-content width-460">'+
        '<div class="row margin-top-10">'+
        '<div class="col-md-3">'+
        '<div>'+
        '<i class="fa fa-bookmark color-199ed5" aria-hidden="true"></i>'+
        '<span> Carrdio</span>'+
        '</div>'+
        '</div>'+
        '<div class="col-md-3">'+
        '<i class="fa fa-calendar-o color-199ed5" aria-hidden="true"></i>'+
        '<span> Oct 19,2017</span>'+
        '</div>'+
        '<div class="col-md-3">'+
        '<i class="fa fa-map-marker color-199ed5" aria-hidden="true"></i>'+
        '<span> Motreal, QC</span>'+
        '</div>'+
        '</div>'+
        '<div class="margin-top-16">'+
        '<span>Event Type: OLA</span>'+
        '</div>'+
        '<div class="margin-top-16">'+
        '<span>Speaker: </span>'+
        '<span>Ronald Mund</span>'+
        '</div>'+
        '<div class="margin-top-16">'+
        '<span>Venue: Restaurant</span>'+
        '</div>'+
        '<div class="row margin-top-20">'+
        '<div class="col-md-6 text-align-center">'+
        '<div>'+
        '<span>ATTENDEES</span>'+
        '</div>'+
        '<div>'+
        '<span class="color-199ed5 font-size-16">25</span>'+
        '</div>'+
        '</div>'+
        '<div class="col-md-6 text-align-center">'+
        '<div>'+
        '<span>RESPONSES</span>'+
        '</div>'+
        '<div>'+
        '<span class="color-199ed5 font-size-16">21</span>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
    '</div>';
// var locations = [
//   {
//   lat: -19.9286,
//   lng: -43.93888,
//   info: contentString
//   },
//   {
//   lat: -19.85758,
//   lng: -43.9668,
//   info: contentString
//   },
//   {
//   lat: -18.24587,
//   lng: -43.59613,
//   info: contentString
//   },
//   {
//   lat: -20.46427,
//   lng: -45.42629,
//   info: contentString
//   },
//   {
//   lat: -20.37817,
//   lng: -43.41641,
//   info: contentString
//   },
//   {
//   lat: -20.09749,
//   lng: -43.48831,
//   info: contentString
//   },
//   {
//   lat: -21.13594,
//   lng: -44.26132,
//   info: contentString
//   },
// ];

google.maps.event.addDomListener(window, 'load', initialize);