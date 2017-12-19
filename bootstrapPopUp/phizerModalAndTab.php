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
        array("tabName" => 'tab4', "tabContent" => 'this is tab4'),
        array("tabName" => 'tab5', "tabContent" => 'this is tab5'),
        array("tabName" => 'tab6', "tabContent" => 'this is tab6')
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
                $output .= '<button type="button" class="close" data-dismiss="modal">&times;</button>';
                $output .= '<h4 class="modal-title color-fff text-align-center">Modal Header</h4>';

                // $output .= '<ul class="nav nav-tabs">';
                //   $output .= '<li class="active"><a data-toggle="tab" href="#home">Home</a></li>';
                //   $output .= '<li><a data-toggle="tab" href="#menu1">Menu 1</a></li>';
                //   $output .= '<li><a data-toggle="tab" href="#menu2">Menu 2</a></li>';
                //   $output .= '<li><a data-toggle="tab" href="#menu3">Menu 3</a></li>';
                // $output .= '</ul>';

                // $output .= '<div class="tab-content">';
                //   $output .= '<div id="home" class="tab-pane fade in active">';
                //     $output .= '<h3>HOME</h3>';
                //     $output .= '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';
                //   $output .= '</div>';
                //   $output .= '<div id="menu1" class="tab-pane fade">';
                //     $output .= '<h3>Menu 1</h3>';
                //     $output .= '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
                //   $output .= '</div>';
                //   $output .= '<div id="menu2" class="tab-pane fade">';
                //     $output .= '<h3>Menu 2</h3>';
                //     $output .= '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>';
                //   $output .= '</div>';
                //   $output .= '<div id="menu3" class="tab-pane fade">';
                //     $output .= '<h3>Menu 3</h3>';
                //     $output .= '<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>';
                //   $output .= '</div>';
                // $output .= '</div>';
                $output .= $this->getTabContent($firstTabValue);
              $output .= '</div>';

              $output .= '<div class="modal-body bg-673ab7">';

                // $output .= '<ul class="nav nav-tabs">';
                //   $output .= '<li class="active"><a data-toggle="tab" href="#home">Home</a></li>';
                //   $output .= '<li><a data-toggle="tab" href="#menu4">Menu 1</a></li>';
                //   $output .= '<li><a data-toggle="tab" href="#menu5">Menu 2</a></li>';
                //   $output .= '<li><a data-toggle="tab" href="#menu6">Menu 3</a></li>';
                // $output .= '</ul>';
                // $output .= '<div class="tab-content">';
                //   $output .= '<div id="home" class="tab-pane fade in active">';
                //     $output .= '<h3>HOME</h3>';
                //     $output .= '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';
                //   $output .= '</div>';
                //   $output .= '<div id="menu4" class="tab-pane fade">';
                //     $output .= '<h3>Menu 1</h3>';
                //     $output .= '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
                //   $output .= '</div>';
                //   $output .= '<div id="menu5" class="tab-pane fade">';
                //     $output .= '<h3>Menu 2</h3>';
                //     $output .= '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>';
                //   $output .= '</div>';
                //   $output .= '<div id="menu6" class="tab-pane fade">';
                //     $output .= '<h3>Menu 3</h3>';
                //     $output .= '<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>';
                //   $output .= '</div>';
                // $output .= '</div>';
              $output .= $this->getTabTable($secondTabValue);
              $output .= '</div>';
            $output .= '</div>';
          $output .= '</div>';
        $output .= '</div>';
      $output .= '</div>';

      return $output;
    }

    public function getTabContent($tabVaule) {
      $output = '';
      $output .= '<ul class="nav nav-tabs">';
        $output .= '<li><a class="color-fff" data-toggle="tab" href="#tab1">Home</a></li>';
        $output .= '<li><a class="color-fff" data-toggle="tab" href="#menu1">Menu 1</a></li>';
      $output .= '</ul>';

      $output .= '<div class="tab-content bg-ffffff padding-50">';
        $output .= '<div id="tab1" class="tab-pane fade in active">';
          $output .= '<div class="row margin-top-6">';

            $output .= '<div class="col-md-3">';
              $output .= '<div class="text-align-center">';
                $output .= '<p>' . $tabVaule[0]["tabNumber"] . '</p>';
                $output .= '<p class="font-size-12">' . $tabVaule[0]["tabContent"] . '</p>';
              $output .= '</div>';
            $output .= '</div>';
            $output .= '<div class="col-md-3">';
              $output .= '<div class="border-right-2-e2e2e2 border-left-2-e2e2e2 text-align-center">';
                $output .= '<p>' . $tabVaule[1]["tabNumber"] . '</p>';
                $output .= '<p class="font-size-12">' . $tabVaule[1]["tabContent"] . '</p>';
              $output .= '</div>';
            $output .= '</div>';
            $output .= '<div class="col-md-2">';
              $output .= '<div class="text-align-center">';
                $output .= '<p>' . $tabVaule[2]["tabNumber"] . '</p>';
                $output .= '<p class="font-size-12">' . $tabVaule[2]["tabContent"] . '</p>';
              $output .= '</div>';
            $output .= '</div>';
            $output .= '<div class="col-md-2">';
              $output .= '<div class="border-right-2-e2e2e2 border-left-2-e2e2e2 text-align-center">';
                $output .= '<p>' . $tabVaule[3]["tabNumber"] . '</p>';
                $output .= '<p class="font-size-12">' . $tabVaule[3]["tabContent"] . '</p>';
              $output .= '</div>';
            $output .= '</div>';
            $output .= '<div class="col-md-2">';
              $output .= '<div class="text-align-center">';
                $output .= '<p>' . $tabVaule[4]["tabNumber"] . '</p>';
                $output .= '<p class="font-size-12">' . $tabVaule[4]["tabContent"] . '</p>';
              $output .= '</div>';
            $output .= '</div>';

          $output .= '</div>';
        $output .= '</div>';
        $output .= '<div id="menu1" class="tab-pane fade">';
          $output .= '<h3>Menu 1</h3>';
          $output .= '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
        $output .= '</div>';
      $output .= '</div>';

      return $output;
    }

    public function getTabTable($tabVaule) {
      $output = '';
      $output .= '<ul class="nav nav-tabs bg-673ab7">';
        $output .= '<li><a class="color-fff" data-toggle="tab" href="#tab21">Home</a></li>';
        $output .= '<li><a class="color-fff" data-toggle="tab" href="#tab22">Menu 1</a></li>';
      $output .= '</ul>';

      $output .= '<div class="tab-content bg-ffffff padding-50">';

        $output .= '<div id="tab21" class="tab-pane fade in active">';
          $output .= '<table class="table">';
              $output .= '<thead>';
                $output .= '<tr>';
                  $output .= '<th>Firstname</th>';
                  $output .= '<th>Lastname</th>';
                  $output .= '<th>Email</th>';
                $output .= '</tr>';
              $output .= '</thead>';
              $output .= '<tbody>';
                $output .= '<tr>';
                  $output .= '<td>John</td>';
                  $output .= '<td>Doe</td>';
                  $output .= '<td>john@example.com</td>';
                $output .= '</tr>';
                $output .= '<tr>';
                  $output .= '<td>Mary</td>';
                  $output .= '<td>Moe</td>';
                  $output .= '<td>mary@example.com</td>';
                $output .= '</tr>';
                $output .= '<tr>';
                  $output .= '<td>July</td>';
                  $output .= '<td>Dooley</td>';
                  $output .= '<td>july@example.com</td>';
                $output .= '</tr>';
              $output .= '</tbody>';
            $output .= '</table>';
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
