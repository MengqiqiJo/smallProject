<?php


  echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">';
  echo '<link rel="stylesheet" href="../plugin.css">';
  echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>';
  echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>';

  class modalAndTab {

    public function getModalAndTab() {
      $firstTabValue = array(
        array("tabNumber" => '8', "tabContent" => 'TOTAL EVENTS'),
        array("tabNumber" => '125', "tabContent" => 'HCP REACH'),
        array("tabNumber" => '110', "tabContent" => 'RESPONSES'),
        array("tabNumber" => '4.55', "tabContent" => 'RATING'),
        array("tabNumber" => '14,000', "tabContent" => 'Honorarium')
      );
      $secondTabValue = array(
        array("tabContentOne" => 'Program Name', "tabContentTwo" => '#Events', "tabContentThree" => 'Reach', "tabContentFour" => 'Responses'),
        array("tabContentOne" => 'Hyperlink Program Name', "tabContentTwo" => '125', "tabContentThree" => '1125', "tabContentFour" => '950'),
        array("tabContentOne" => 'Hyperlink Program Name', "tabContentTwo" => '125', "tabContentThree" => '1125', "tabContentFour" => '950'),
        array("tabContentOne" => 'Hyperlink Program Name', "tabContentTwo" => '125', "tabContentThree" => '1125', "tabContentFour" => '950')
      );

      $output = '';
      $output .= '';
      $output .= '<div class="container">';
        $output .= '<h2>Modal Example</h2>';
        $output .= '<!-- Trigger the modal with a button -->';
        $output .= '<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>';

        $output .= '<!-- Modal -->';
        $output .= '<div class="modal fade" id="myModal" role="dialog">';
          $output .= '<div class="modal-dialog">';

            $output .= '<!-- Modal content-->';
            $output .= '<div class="modal-content">';

              $output .= '<div class="modal-header bg-673ab7">';
                $output .= '<button type="button" class="close color-fff" data-dismiss="modal">&times;</button>';
                $output .= '<h4 class="modal-title color-fff text-align-center">Modal Header</h4>';
                $output .= $this->getTabContent($firstTabValue);
              $output .= '</div>';

              $output .= '<div class="modal-body bg-673ab7">';
              $output .= $this->getTabTable($secondTabValue);
              $output .= '</div>';
            $output .= '</div>';
          $output .= '</div>';
        $output .= '</div>';
      $output .= '</div>';

      return $output;
    }

    public function getTabContent($tabVaule) {
      $countTabContent = count($tabVaule);
      $output = '';
      $output .= '<div>';
        $output .= '<ul class="nav nav-tabs">';
          $output .= '<li><a class="color-fff" data-toggle="tab" href="#tab1">Home</a></li>';
          $output .= '<li><a class="color-fff" data-toggle="tab" href="#menu1">Menu 1</a></li>';
        $output .= '</ul>';
      $output .= '</div>';

      $output .= '<div class="tab-content margin-bottom-n-16">';
        $output .= '<div id="tab1" class="tab-pane fade in active">';
          $output .= '<div class="row bg-ffffff padding-top-20 padding-bottom-20">';
            $output .= '<div class="col-md-3">';
              $output .= '<div class="text-align-center">';
                $output .= '<p>' . $tabVaule[0]["tabNumber"] . '</p>';
                $output .= '<p class="font-size-10">' . $tabVaule[0]["tabContent"] . '</p>';
              $output .= '</div>';
            $output .= '</div>';
            for ($i = 1; $i < $countTabContent; $i++) {
              $output .= '<div class="col-md-2">';
                $output .= '<div class="text-align-center border-left-2-e2e2e2">';
                  $output .= '<p>' . $tabVaule[$i]["tabNumber"] . '</p>';
                  $output .= '<p class="font-size-10">' . $tabVaule[$i]["tabContent"] . '</p>';
                $output .= '</div>';
              $output .= '</div>';
            }
          $output .= '</div>';
        $output .= '</div>';
        $output .= '<div id="menu1" class="tab-pane fade">';
          $output .= '<h3>Menu 1</h3>';
          $output .= '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
        $output .= '</div>';
      $output .= '</div>';

      return $output;
    }

    public function getTabTable($tabVauleSecond) {
      $countTable = count($tabVauleSecond);
      $output = '';
      $output .= '<ul class="nav nav-tabs bg-673ab7">';
        $output .= '<li><a class="color-fff" data-toggle="tab" href="#tab21">Home</a></li>';
        $output .= '<li><a class="color-fff" data-toggle="tab" href="#tab22">Menu 1</a></li>';
      $output .= '</ul>';

      $output .= '<div class="tab-content bg-ffffff margin-bottom-n-16">';

        $output .= '<div id="tab21" class="tab-pane fade in active">';
          $output .= '<div class="row bg-ffffff padding-top-20 padding-bottom-20">';
            $output .= '<table class="table">';
                $output .= '<thead>';
                  $output .= '<tr>';
                    $output .= '<th class="font-size-12">' . $tabVauleSecond[0]["tabContentOne"] . '</th>';
                    $output .= '<th class="font-size-12">' . $tabVauleSecond[0]["tabContentTwo"] . '</th>';
                    $output .= '<th class="font-size-12">' . $tabVauleSecond[0]["tabContentThree"] . '</th>';
                    $output .= '<th class="font-size-12">' . $tabVauleSecond[0]["tabContentFour"] . '</th>';
                  $output .= '</tr>';
                $output .= '</thead>';
                $output .= '<tbody>';
                for ($i = 1; $i < $countTable; $i++) {
                  $output .= '<tr>';
                    $output .= '<th class="font-size-12 font-normal">' . $tabVauleSecond[$i]["tabContentOne"] . '</th>';
                    $output .= '<th class="font-size-12 font-normal">' . $tabVauleSecond[$i]["tabContentTwo"] . '</th>';
                    $output .= '<th class="font-size-12 font-normal">' . $tabVauleSecond[$i]["tabContentThree"] . '</th>';
                    $output .= '<th class="font-size-12 font-normal">' . $tabVauleSecond[$i]["tabContentFour"] . '</th>';
                  $output .= '</tr>';
                }
                $output .= '</tbody>';
              $output .= '</table>';
          $output .= '</div>';
        $output .= '</div>';

        $output .= '<div id="tab22" class="tab-pane fade">';
          $output .= '<h3>Menu 1</h3>';
          $output .= '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
        $output .= '</div>';

      $output .= '</div>';
      return $output;
    }


  }

$modalAndTab = new modalAndTab();
$cc = $modalAndTab->getModalAndTab();
echo $cc;
