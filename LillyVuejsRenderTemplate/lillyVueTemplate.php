<?php


echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">';
echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>';
echo "<link rel='stylesheet' href='../plugin.css'>";

/**
 * @file
 */
class dashpageBlockGenerator {

  /*
   * Content Master contain multiple elements
   */
  function contentBlockMaster() {

    $output = '';
    $output .= '<div id="page-wrapper" width="40" height="40" class="row">';
    $output .= '<piechart>s1s2s3s4s5</piechart>';
    $output .= '<doughnutchart>s1s2s3s4s5</doughnutchart>';
    $output .= '</div>';

    $output .= '<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>';
    $output .= '<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.4/vue.min.js"></script>';
    $output .= '<script src="chartTemplate.js" type="text/javascript"></script>';

    return $output;
  }

}

$dashpageBlockGenerator = new dashpageBlockGenerator();
$cc = $dashpageBlockGenerator->contentBlockMaster();
echo $cc;