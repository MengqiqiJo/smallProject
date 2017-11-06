<?php


echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">';
// echo '<script src="https://cdn.rawgit.com/FVANCOP/ChartNew.js/master/ChartNew.js"></script>';
// echo '<script src="https://rawgit.com/FVANCOP/ChartNew.js/master/ChartNew.js"></script>';
echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>';
echo '<script type="text/javascript" src="ChartNew.js"></script>';
echo '<script src="https://unpkg.com/vue"></script>';
echo '<script type="text/javascript" src="lillyVueTemplate.js"></script>';
echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>';
echo "<link rel='stylesheet' href='../plugin.css'>";
echo '<script src="https://unpkg.com/vue/dist/vue.js"></script>';

/**
 * @file
 */
class dashpageBlockGenerator {

  /*
   * Content Master contain multiple elements
   */
  function contentBlockMaster() {

    $output = '';
    $output .= '<div id="block">';
      // $output .= '<div ng-if="block.top.enable">';
      //   $output .= '<md-content>';
      //     $output .= $this->contentRenderHeader();
      //   $output .= '</md-content>';
      // $output .= '</div>';

      $output .= '<div>';
        // $output .= '<div ng-if="block.middle.enable">';
          // $output .= '<div class="{{block.blockClasses}}">';
            // $output .= '<div ng-switch="block.type">';
              // $output .= '<div v-if="blocks[\'contentSection\'][2].type==\'chart\'">';
                // $output .= $this->contentRenderCharts();
              // $output .= "{{blocks['contentSection'][2].middle.middleMiddle.middleMiddleMiddle.chartOptions}}<br/>";
              // $output .= "{{blocks['contentSection'][2].middle.middleMiddle.middleMiddleMiddle.chartType}}<br/>";
              // $output .= "{{blocks['contentSection'][2].middle.middleMiddle.middleMiddleMiddle.chartId}}<br/>";
              // $output .= "{{blocks['contentSection'][2].middle.middleMiddle.middleMiddleMiddle.chartData}}<br/>";
                $output .= '<canvas width="600" height="700"
                  options="{inGraphDataShow : true,
                            inGraphDataAnglePosition : 2,
                            inGraphDataRadiusPosition: 2,
                            inGraphDataRotate : \'inRadiusAxisRotateLabels\',
                            inGraphDataAlign : \'center\',
                            inGraphDataVAlign : \'middle\',
                            inGraphDataFontColor: \'white\',
                            inGraphDataFontSize : 16}"
                  type="pie"
                  data="[{
                          \'value\': 45,
                          \'color\': \'#2fa9e0\',
                          \'title\': \'1(12)\'
                          },
                          {
                          \'value\': 12,
                          \'color\': \'#f24b99\',
                          \'title\': \'2(28)\'
                          },
                          {
                          \'value\': 32,
                          \'color\': \'#37d8b3\',
                          \'title\': \'3(9)\'
                          }]"></canvas>';
              // $output .= '</div>';
              $output .= '<div v-else>';
                // $output .= $this->contentRenderCharts();
              $output .= "hello2222";
              $output .= '</div>';
            // $output .= '</div>';
          // $output .= '</div>';
        // $output .= '</div>';
        // $output .= '<div ng-if="block.bottom.enable">';
        //   $output .= '<md-content>';
        //     $output .= $this->contentRenderBottom();
        //   $output .= '</md-content>';
        // $output .= '</div>';
      $output .= '</div>';
    $output .= '</div>';

    $output .= '<script src="https://unpkg.com/vue"></script>';
    $output .= '<script src="LillyVueTemplate.js" type="text/javascript"></script>';

    return $output;
  }

  /**
   *
   */
  function contentRenderCharts() {

    $output = '';

    $output .= '<div class="content-render-chart-wrapper">';
      // $output .= '<div ng-bind-html="$sce.trustAsHtml(block.middle.middleTop)">';
      //   $output .= '{{block.middle.middleTop}}';
      // $output .= '</div>';

      // $output .= '<div class="{{block.middle.middleMiddle.middleMiddleLeftClass}}">';
      //   $output .= '<span ng-bind-html="$sce.trustAsHtml(block.middle.middleMiddle.middleMiddleLeft)">';
      //     $output .= '{{block.middle.middleMiddle.middleMiddleLeft}}';
      //   $output .= '</span>';
      // $output .= '</div>';

        // left column of pie chart and doughnut chart
        $output .= '<div v-if="block.middle.middleMiddle.middleMiddleRight.length">';
          $output .= '<div class="col-md-9">';
            $output .= '<canvas width="600" height="700"
              options="{{block.middle.middleMiddle.middleMiddleMiddle.chartOptions}}"
              type="{{block.middle.middleMiddle.middleMiddleMiddle.chartType}}"
              id="{{block.middle.middleMiddle.middleMiddleMiddle.chartId}}"
              data="{{block.middle.middleMiddle.middleMiddleMiddle.chartData}}"></canvas>';
          $output .= '</div>';
          //legends
        //   $output .= '<div class="col-md-3">';
        //     $output .= '<span ng-bind-html="$sce.trustAsHtml(block.middle.middleMiddle.middleMiddleRight)">';
        //       $output .= '{{block.middle.middleMiddle.middleMiddleRight}}';
        //     $output .= '</span>';
        //   $output .= '</div>';
        // $output .= '</div>';
        // right column of pie chart and doughnut chart
        $output .= '<div v-if="block.middle.middleMiddle.middleMiddleRight.length < 1" class="{{block.middle.middleMiddle.middleMiddleMiddleClass}}">';
          $output .= '<canvas width="600" height="700"
            options="{{block.middle.middleMiddle.middleMiddleMiddle.chartOptions}}"
            type="{{block.middle.middleMiddle.middleMiddleMiddle.chartType}}"
            id="{{block.middle.middleMiddle.middleMiddleMiddle.chartId}}"
            data="{{block.middle.middleMiddle.middleMiddleMiddle.chartData}}">';
          $output .= '</canvas>';
        $output .= '</div>';
      // $output .= '</div>';
      // $output .= '<div ng-if="block.middle.middleMiddle.middleMiddleMiddle.chartData.length < 1">';
        // $output .= '<div class="no-data-template">N.A</div>';
      // $output .= '</div>';

      // chart bottom
      // $output .= '<div ng-bind-html="$sce.trustAsHtml(block.middle.middleBottom)">';
      //   $output .= '{{block.middle.middleBottom}}';
      // $output .= '</div>';
    $output .= '</div>';

    // $output .= '<div ng-if="block.bottom.enable">';
    //   $output .= '<md-content>';
    //     $output .= $this->contentRenderBottom();
    //   $output .= '</md-content>';
    // $output .= '</div>';

    return $output;
  }


}

$dashpageBlockGenerator = new dashpageBlockGenerator();
$cc = $dashpageBlockGenerator->contentBlockMaster();
echo $cc;