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
    $output .= '<div id="page-wrapper" class="row">';

$output .= '<vue-chartjs-top></vue-chartjs-top>';
            $output .= '<doughnutchart></doughnutchart>';


      $output .= '<div class="col-sm-12 col-md-6 col-lg-6">';
        $output .= '<div class="margin-left-20">';
          $output .= '<div class="border-1-e7e7e7">';
            $output .= '<vue-chartjs-top></vue-chartjs-top>';
            $output .= '<vue-chartjs-pie></vue-chartjs-pie>';
          $output .= '</div>';
        $output .= '</div>';
      $output .= '</div>';

      // $output .= '<div class="col-sm-12 col-md-6 col-lg-6">';
      //   $output .= '<div class="margin-left-20">';
      //     $output .= '<div class="border-1-e7e7e7">';
      //       $output .= '<vue-chartjs-top></vue-chartjs-top>';
            $output .= '<vue-chartjs-bar></vue-chartjs-bar>';
      //     $output .= '</div>';
      //   $output .= '</div>';
      // $output .= '</div>';

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