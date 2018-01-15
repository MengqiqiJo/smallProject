/*
 * This controller will take care of parsing the data from json file
 */
var jsonFileUrl = drupalSettings.path.baseUrl + 'flexpage/emptyangular/json/11/22/33';
var pathArg = drupalSettings.path.currentPath.split('/');

var pageInfoBaseControllers = angular.module('pageInfoBase', ['flexxiaChartsnewjs', 'ngMaterial', 'datatables', 'ngResource', 'datatables.buttons', 'ngSanitize']);

pageInfoBaseControllers.controller('PageInfoBaseController', ['$scope', '$timeout', '$http', '$mdDialog', '$mdMedia', '$filter', '$sce',
  function($scope, $timeout, $http, $mdDialog, $mdMedia, $filter, $sce) {
    $scope.$sce = $sce;

    // var spinOptions is from fxt/js/spinner_controller.js file
    var spinner = new Spinner(spinOptions).spin(document.getElementById('spinner-center-wrapper'));

    angular.element(document).ready(function() {
      $scope.pageData = null;

      $http({
        method: 'GET',
        url: jsonFileUrl
      }).then(function (response) {

        $scope.pageData = response.data;

        if (typeof drupalSettings.flexpage !== 'undefined') {
          $scope.pageData = drupalSettings.flexpage.flexpageData.objectContentData;
        }

        if ((drupalSettings.path.currentPath.indexOf("manageinfo/") > -1)
          && (typeof drupalSettings.manageinfo !== 'undefined')
          && (typeof drupalSettings.manageinfo.manageinfoList !== 'undefined')
          && (typeof drupalSettings.manageinfo.manageinfoList.jsonContentData !== 'undefined')) {
          $scope.pageData = drupalSettings.manageinfo.manageinfoList.jsonContentData;
        }

        spinner.stop();
        $scope.afterSpinnerLoadContentDisplay = true;

      },function (error) {
        // if error occurs
      });

      jQuery('[data-toggle="tooltip"]').tooltip();

    });

  }
]);

/* SaveAsPng Controller */
pageInfoBaseControllers.controller('SaveAsPng', SaveImageAsPng);
function SaveImageAsPng($scope, $sce) {

  // Open Menu to save blocks
  $scope.openMenu = function($mdOpenMenu, ev) {
    var originatorEv = ev;
    $mdOpenMenu(ev);
  };

  // save the block as .png
  $scope.saveAsPng = function(blockType, blockTid) {
    var blockId = 'block' + '-' + blockType + '-' + blockTid;
    var buttonId = 'save' + '-' + blockType + '-' + blockTid;

    var blockElement = document.getElementById(blockId);
    jQuery("#" + buttonId).css("display", "none");

    // The html2canvas version 1.0.0  utilizes Promise
    html2canvas(blockElement).then(function(canvas) {
      var element = document.createElement('a');
      element.href = canvas.toDataURL("image/png");
      element.download = blockType + '-' + blockTid + '.png';
      element.click();
    });

    jQuery("#" + buttonId).css("display", "block");
  }
}

/* Datatables Controller */
pageInfoBaseControllers.controller('AngularDataTables', DataTablesCtrl);
function DataTablesCtrl($http, $scope, $timeout, $resource, DTOptionsBuilder, DTColumnBuilder, DTDefaultOptions, $mdDialog) {
  $scope.dtInstance = {};

  $scope.checkDataLength = function(value) {
    if(value != null) {
      if(value.length > 40 && !value.includes("href")) {
        return value;
      }
      else {
        return 0;
      }
    }
  }
  angular.forEach($scope.pageData.contentSection, function(value) {
    if(value.type == "commonTable" || value.type == "mildderTable" || value.type == "commonPhpTable") {
      $scope.tableSettings = value.middle.middleMiddle.middleMiddleMiddle.tableSettings;
    }
    else if(value.type == "multiTabs") {
      angular.forEach(value.middle.value, function(tabData) {
        if(tabData.type == "commonTable") {
          $scope.tableSettings = tabData.middle.middleMiddle.middleMiddleMiddle.tableSettings;
        }
      });
    }
  });

  $scope.dtOptionsCommonTables = {
    // order: [[ 0, "desc" ]],
    // "dom": 'lfrtip',
    // buttons: ['copy', 'excel'],
  };

  $scope.dtOptionsCommonTables = {
    paging: true,
    paginationType: $scope.tableSettings.paginationType,
    bInfo: false,
    deferRender: true,
    responsive: true,
    bPaginate: $scope.tableSettings.pagination,
    bFilter: $scope.tableSettings.searchFilter,
    order: [[ 0, "desc" ]],
    dom: '<"row view-filter"<"col-sm-12 padding-0"<"pull-left"f><"pull-right margin-left-24"B><"pull-right"l><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
    columnDefs: [
      {
        targets: 1,
        className: 'noVis'
      }
    ],
    buttons: [
      'copy',
      {
        extend: 'excel',
        exportOptions: {
          columns: ':visible'
        },
      },
      {
        extend: 'colvis',      // Column visibility
        columns: ':not(.noVis)'
      }
    ],
    Language: {
      "searchPlaceholder": $scope.tableSettings.searchPlaceholder,
      "sSearch": "",
      "oPaginate": {
        "sFirst": "",
        "sLast": "",
        "sNext": "<span class='fa fa-caret-right color-00a9e0'></span>",
        "sPrevious": "<span class='fa fa-caret-left color-00a9e0'></span>",
      },
      "sLengthMenu":
        '<select>' +
          '<option value="10">SHOW 10</option>' +
          '<option value="20">SHOW 20</option>' +
          '<option value="30">SHOW 30</option>' +
          '<option value="40">SHOW 40</option>' +
          '<option value="50">SHOW 50</option>' +
          '<option value="-1">SHOW All</option>' +
        '</select> '
    }
  };

  // Change Tasklist table filters
  jQuery.extend($scope.dtOptionsPlusTable, $scope.dtOptionsCommonTables);

  // instance for custom select filter for table
  $scope.dtIntanceCallback = function(instance) {
    $scope.dtInstance = instance;
    var table = $scope.dtInstance.DataTable;
    var select = jQuery('#table-content-filter')
      .on( 'change', function () {
        var filterValue = jQuery(this).val();

        table.columns().every(function() {
          var column = this;
          var data = this.data();
          data.search(filterValue).draw();
        });
      });
  };

  $scope.tablePopUp = function(tableData) {
    var parentEl = angular.element(document.body);
    $mdDialog.show({
      clickOutsideToClose: true,
      parent: parentEl,
      scope: $scope,
      preserveScope: true,
      disableParentScroll: true,
      controller: function DialogController($scope, $mdDialog) {
        $scope.closeDialog = function() {
          $mdDialog.hide();
        }
        var vm = this;
        vm.tableData = {};
        vm.tableData = tableData;
      },
      controllerAs: 'popUp',
      template:
        '<md-dialog flex="45" class="register-dialogbox">' +
          '<md-dialog-content class="overflow-x-hidden">' +
            '<div class="row">' +
              '<div ng-bind-html="$sce.trustAsHtml(popUp.tableData)">{{popUp.tableData}}</div>' +
            '</div>' +
            '<div class="text-align-center">' +
              '<md-button class="btn btn-popup" ng-click="closeDialog()">Great!</md-button>' +
            '</div>' +
          '</md-dialog-content>' +
        '</md-dialog>',
    });
  }

  $timeout(function() {
    var orderColumn = jQuery('#content-render-php-table-wrapper').data('tableSortColumn');
    var orderType = jQuery('#content-render-php-table-wrapper').data('tableSortType');

    // set default orderColumn
    if (!orderColumn) {
      orderColumn = 0;
    }

    if (!orderType) {
      orderType = "asc"; // asc or desc
    }

    // Render PHP Table
    jQuery('#php-table-list').DataTable({
      paginationType: 'full_numbers',
      deferRender: true,
      bInfo: true,
      order: [[orderColumn, orderType]],
      language: {
        "searchPlaceholder": "SEARCH",
        "sSearch": "",
        "oPaginate": {
          "sFirst": "",
          "sLast": "",
          "sNext": "<span class='fa fa-caret-right color-00a9e0'></span>",
          "sPrevious": "<span class='fa fa-caret-left color-00a9e0'></span>",
        },
        "sLengthMenu":
          '<select>' +
            '<option value="10">SHOW 10</option>' +
            '<option value="20">SHOW 20</option>' +
            '<option value="30">SHOW 30</option>' +
            '<option value="40">SHOW 40</option>' +
            '<option value="50">SHOW 50</option>' +
            '<option value="-1">SHOW All</option>' +
          '</select>'
      }
    });
    jQuery('#php-table-list').show();
  });
}

/**
 *
 */
pageInfoBaseControllers.directive('compile', ['$compile', function ($compile) {
  return function(scope, element, attrs) {
    scope.$watch(
      function(scope) {
        // watch the 'compile' expression for changes
        return scope.$eval(attrs.compile);
      },
      function(value) {
        // when the 'compile' expression changes
        // assign it into the current DOM
        element.html(value);

        // compile the new DOM and link it to the current
        // scope.
        // NOTE: we only compile .childNodes so that
        // we don't get into infinite loop compiling ourselves
        $compile(element.contents())(scope);
      }
    );
  };
}]);
