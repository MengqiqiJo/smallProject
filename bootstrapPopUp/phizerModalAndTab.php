<?php


  echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">';
  echo '<link rel="stylesheet" href="../plugin.css">';
  echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>';
  echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>';

  /**
   *
   */
  class modalAndTab {

    /**
     *
     */
    public function getDemoPage() {
      $output = $this->getDemoModalPageButton(1);
      $output .= $this->getDemoModalPageButton(2);

      $output .= $this->getDemoModalPageLink(3);
      return $output;
    }

    public function getDemoModalPageButton($number) {
      $output = '';
      $output .= '';
      $output .= '<div class="container">';
        $output .= '<h2>Modal Example</h2>';
        $output .= $this->getDemoModalButton($number);
        $output .= $this->getModalAndTab($this->getFirstTabValue($number), $this->getSecondTabValue($number), $number);
      $output .= '</div>';
      return $output;
    }

    /**
     *
     */
    public function getDemoModalPageLink($modalNumber) {
      $output = '';
      $output .= '';
      $output .= '<div class="container">';
        for($number = 0; $number < $modalNumber; $number++) {
          $output .= '<h2>Modal Example</h2>';
          $output .= $this->getDemoModalLink($number);
          $output .= $this->getModalAndTab($this->getFirstTabValue($number), $this->getSecondTabValue($number), $number);
        }
      $output .= '</div>';
      return $output;
    }

    /**
     *
     */
    public function getFirstTabValue($user_uid) {

      $firstTabValue = array(
        array(
          "tabNumber" => '8' . $user_uid,
          "tabContent" => 'TOTAL EVENTS',
        ),
        array(
          "tabNumber" => '125',
          "tabContent" => 'HCP REACH',
        ),
        array(
          "tabNumber" => '110',
          "tabContent" => 'RESPONSES',
        ),
        array(
          "tabNumber" => '4.55',
          "tabContent" => 'RATING',
        ),
        array(
          "tabNumber" => '14,000',
          "tabContent" => 'Honorarium',
        )
      );
      return $firstTabValue;
    }

    /**
     *
     */
    public function getSecondTabValue($user_uid) {
      $secondTabValue = array(
        array(
          "tabContentOne" => 'Program Name' . $user_uid,
          "tabContentTwo" => '#Events',
          "tabContentThree" => 'Reach',
          "tabContentFour" => 'Responses',
        ),
        array(
          "tabContentOne" => 'Hyperlink Program Name',
          "tabContentTwo" => '125',
          "tabContentThree" => '1125',
          "tabContentFour" => '950',
        ),
        array(
          "tabContentOne" => 'Hyperlink Program Name',
          "tabContentTwo" => '125',
          "tabContentThree" => '1125',
          "tabContentFour" => '950',
        ),
        array(
          "tabContentOne" => 'Hyperlink Program Name',
          "tabContentTwo" => '125',
          "tabContentThree" => '1125',
          "tabContentFour" => '950',
        )
      );
      return $secondTabValue;
    }

    /**
     *
     */
    public function getDemoModalButton($user_uid = NULL) {
      // Trigger the modal with a button
      $output = '<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal-' . $user_uid . '">Open Modal</button>';
      return $output;
    }

    /**
     *
     */
    public function getDemoModalLink($user_uid = NULL) {
      // Trigger the modal with a button
      $output = '<a data-toggle="modal" data-target="#myModal-' . $user_uid . '">Open Modal</a>';
      //   $output .= $user_name;
      // $output .= '</a>';

      return $output;
    }

    /**
     *
     */
    public function getModalAndTab($firstTabValue, $secondTabValue, $user_uid = NULL) {

      $output = '';
      $output .= '';
      $output .= '<div class="container">';

        $output .= '<!-- Modal -->';
        $output .= '<div class="modal fade" id="myModal-' . $user_uid . '" role="dialog">';
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
                $output .= $this->getTabTable($secondTabValue, $secondTabValue);
              $output .= '</div>';
            $output .= '</div>';
          $output .= '</div>';
        $output .= '</div>';
      $output .= '</div>';
      return $output;
    }

    /**
     *
     */
    public function getTabContent($tabVaule) {
      // $countTabContent = count($tabVaule);

      $output = '';
      $output .= '<div class="row bg-673ab7">';
        $output .= '<ul class="nav nav-tabs">';

          $output .= '<li>';
            $output .= '<a class="color-fff" data-toggle="tab" href="#tab11">';
              $output .= 'YTD';
            $output .= '</a>';
          $output .= '</li>';
          $output .= '<li>';
            $output .= '<a class="color-fff" data-toggle="tab" href="#tab12">';
              $output .= 'ALL TIME';
            $output .= '</a>';
          $output .= '</li>';
        $output .= '</ul>';
      $output .= '</div>';

      $output .= '<div class="tab-content margin-top-n-4">';
        $output .= '<div id="tab11" class="tab-pane fade in active">';
          $output .= $this->getTabText($tabVaule);
        $output .= '</div>';
        $output .= '<div id="tab12" class="tab-pane fade">';
          $output .= $this->getTabText($tabVaule);
        $output .= '</div>';

      $output .= '</div>';
      return $output;
    }

    /**
     *
     */
    public function getTabText($tabVaule) {
      $countTabContent = count($tabVaule);
      $output = '';
      $output .= '<div class="row padding-top-20 padding-bottom-20">';
        $output .= '<div class="col-md-custom-20-p">';
          $output .= '<div class="text-align-center">';
            $output .= '<p class="font-bold">';
              $output .= $tabVaule[0]["tabNumber"];
            $output .= '</p>';
            $output .= '<p class="font-size-10 color-818384">';
              $output .= $tabVaule[0]["tabContent"];
            $output .= '</p>';
          $output .= '</div>';
        $output .= '</div>';
        for ($i = 1; $i < $countTabContent; $i++) {
          $output .= '<div class="col-md-custom-20-p">';
            $output .= '<div class="text-align-center border-left-2-e2e2e2">';
              $output .= '<p class="font-bold">';
                $output .= $tabVaule[$i]["tabNumber"];
              $output .= '</p>';
              $output .= '<p class="font-size-10 color-818384">';
                $output .= $tabVaule[$i]["tabContent"];
              $output .= '</p>';
            $output .= '</div>';
          $output .= '</div>';
        }
      $output .= '</div>';
      return $output;
    }

    /**
     *
     */
    public function getTabTable($secondTabValue, $secondTabValueTwo) {
      // $countTable = count($tabVauleSecond);
      $output = '';
      $output .= '<ul class="nav nav-tabs bg-673ab7 row margin-top-n-16 padding-top-12">';
        $output .= '<li>';
          $output .= '<a class="color-fff" data-toggle="tab" href="#tab21">';
            $output .= 'PROGRAMS';
          $output .= '</a>';
        $output .= '</li>';
        $output .= '<li>';
          $output .= '<a class="color-fff" data-toggle="tab" href="#tab22">';
            $output .= 'LOCATIONS';
          $output .= '</a>';
        $output .= '</li>';
      $output .= '</ul>';
      $output .= '<div class="tab-content">';
        $output .= '<div id="tab21" class="tab-pane fade in active">';
          $output .= $this->getTableContent($secondTabValue);
        $output .= '</div>';
        $output .= '<div id="tab22" class="tab-pane fade">';
          $output .= $this->getTableContent($secondTabValueTwo);
        $output .= '</div>';
      $output .= '</div>';
      return $output;
    }

    /**
     *
     */
    public function getTableContent($tabVauleSecond) {
      $countTable = count($tabVauleSecond);
      $output = '';
        $output .= '<div class="row padding-top-20 padding-bottom-20">';
          $output .= '<table class="table">';
              $output .= '<thead>';
                $output .= '<tr>';
                  $output .= '<th class="font-size-12">';
                    $output .= $tabVauleSecond[0]["tabContentOne"];
                  $output .= '</th>';
                  $output .= '<th class="font-size-12">';
                    $output .= $tabVauleSecond[0]["tabContentTwo"];
                  $output .= '</th>';
                  $output .= '<th class="font-size-12">';
                    $output .= $tabVauleSecond[0]["tabContentThree"];
                  $output .= '</th>';
                  $output .= '<th class="font-size-12">';
                    $output .= $tabVauleSecond[0]["tabContentFour"];
                  $output .= '</th>';
                $output .= '</tr>';
              $output .= '</thead>';

              $output .= '<tbody>';
              for ($i = 1; $i < $countTable; $i++) {
                $output .= '<tr class="font-size-12 font-normal">';
                  $output .= '<td>';
                    $output .= $tabVauleSecond[$i]["tabContentOne"];
                  $output .= '</td>';
                  $output .= '<td>';
                    $output .= $tabVauleSecond[$i]["tabContentTwo"];
                  $output .= '</td>';
                  $output .= '<td>';
                    $output .= $tabVauleSecond[$i]["tabContentThree"];
                  $output .= '</td>';
                  $output .= '<td>';
                    $output .= $tabVauleSecond[$i]["tabContentFour"];
                  $output .= '</td>';
                $output .= '</tr>';
              }
              $output .= '</tbody>';
            $output .= '</table>';
        $output .= '</div>';
      return $output;
    }

  }

/**
 *
 */
$modalAndTab = new modalAndTab();
$demoModalLink = $modalAndTab->getDemoPage(3);
echo $demoModalLink;

