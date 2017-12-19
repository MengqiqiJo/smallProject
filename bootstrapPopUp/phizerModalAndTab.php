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
      $secondTabValueOne = array(
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

              $output .= '<div class="modal-header">';
                $output .= '<div class="row bg-673ab7 margin-top-n-24 padding-top-20">';
                  $output .= '<h4 class="modal-title color-fff text-align-center">Modal Header</h4>';
                $output .= '</div>';
                $output .= $this->getTabContent($firstTabValue);
              $output .= '</div>';

              $output .= '<div class="modal-body">';
                $output .= $this->getTabTable($secondTabValueOne, $secondTabValueOne);
              $output .= '</div>';
            $output .= '</div>';
          $output .= '</div>';
        $output .= '</div>';
      $output .= '</div>';

      return $output;
    }

    public function getTabContent($tabVaule) {
      // $countTabContent = count($tabVaule);

      $output = '';
      $output .= '<div class="row bg-673ab7">';
        $output .= '<ul class="nav nav-tabs">';
          $output .= '<li><a class="color-fff" data-toggle="tab" href="#tab1">YTD</a></li>';
          $output .= '<li><a class="color-fff" data-toggle="tab" href="#tab2">ALL TIME</a></li>';
        $output .= '</ul>';
      $output .= '</div>';

      $output .= '<div class="tab-content margin-top-n-4">';
        $output .= '<div id="tab1" class="tab-pane fade in active">';
          $output .= $this->getTabText($tabVaule);
        $output .= '</div>';

        $output .= '<div id="tab2" class="tab-pane fade">';
          $output .= $this->getTabText($tabVaule);
        $output .= '</div>';

      $output .= '</div>';

      return $output;
    }

    public function getTabText($tabVaule) {
      $countTabContent = count($tabVaule);
      $output = '';
      $output .= '<div class="row padding-top-20 padding-bottom-20">';
        $output .= '<div class="col-md-custom-20-p">';
          $output .= '<div class="text-align-center">';
            $output .= '<p class="font-bold">' . $tabVaule[0]["tabNumber"] . '</p>';
            $output .= '<p class="font-size-10 color-818384">' . $tabVaule[0]["tabContent"] . '</p>';
          $output .= '</div>';
        $output .= '</div>';
        for ($i = 1; $i < $countTabContent; $i++) {
          $output .= '<div class="col-md-custom-20-p">';
            $output .= '<div class="text-align-center border-left-2-e2e2e2">';
              $output .= '<p class="font-bold">' . $tabVaule[$i]["tabNumber"] . '</p>';
              $output .= '<p class="font-size-10 color-818384">' . $tabVaule[$i]["tabContent"] . '</p>';
            $output .= '</div>';
          $output .= '</div>';
        }
      $output .= '</div>';

      return $output;

    }

    public function getTabTable($secondTabValueOne, $secondTabValueTwo) {
      // $countTable = count($tabVauleSecond);
      $output = '';
      $output .= '<ul class="nav nav-tabs bg-673ab7 row margin-top-n-16 padding-top-12">';
        $output .= '<li><a class="color-fff" data-toggle="tab" href="#tab21">PROGRAMS</a></li>';
        $output .= '<li><a class="color-fff" data-toggle="tab" href="#tab22">LOCATIONS</a></li>';
      $output .= '</ul>';

      $output .= '<div class="tab-content">';

        $output .= '<div id="tab21" class="tab-pane fade in active">';
          $output .= $this->getTableContent($secondTabValueOne);
        $output .= '</div>';
        $output .= '<div id="tab22" class="tab-pane fade">';
          $output .= $this->getTableContent($secondTabValueTwo);
        $output .= '</div>';

      $output .= '</div>';
      return $output;
    }

    public function getTableContent($tabVauleSecond) {
      $countTable = count($tabVauleSecond);
      $output = '';
        $output .= '<div class="row padding-top-20 padding-bottom-20">';
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
                $output .= '<tr class="font-size-12 font-normal">';
                  $output .= '<td>' . $tabVauleSecond[$i]["tabContentOne"] . '</td>';
                  $output .= '<td>' . $tabVauleSecond[$i]["tabContentTwo"] . '</td>';
                  $output .= '<td>' . $tabVauleSecond[$i]["tabContentThree"] . '</td>';
                  $output .= '<td>' . $tabVauleSecond[$i]["tabContentFour"] . '</td>';
                $output .= '</tr>';
              }
              $output .= '</tbody>';
            $output .= '</table>';
        $output .= '</div>';
      return $output;
    }


  }

$modalAndTab = new modalAndTab();
$cc = $modalAndTab->getModalAndTab();
echo $cc;
