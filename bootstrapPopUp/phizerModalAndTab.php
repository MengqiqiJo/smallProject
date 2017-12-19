<?php


  echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">';
  echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>';
  echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>';

  class modalAndTab {

    public function getModalAndTab() {

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
                $output .= '<button type="button" class="close" data-dismiss="modal">&times;</button>';
                $output .= '<h4 class="modal-title">Modal Header</h4>';
                $output .= '<ul class="nav nav-tabs">';
                  $output .= '<li class="active"><a data-toggle="tab" href="#home">Home</a></li>';
                  $output .= '<li><a data-toggle="tab" href="#menu1">Menu 1</a></li>';
                  $output .= '<li><a data-toggle="tab" href="#menu2">Menu 2</a></li>';
                  $output .= '<li><a data-toggle="tab" href="#menu3">Menu 3</a></li>';
                $output .= '</ul>';

                $output .= '<div class="tab-content">';
                  $output .= '<div id="home" class="tab-pane fade in active">';
                    $output .= '<h3>HOME</h3>';
                    $output .= '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';
                  $output .= '</div>';
                  $output .= '<div id="menu1" class="tab-pane fade">';
                    $output .= '<h3>Menu 1</h3>';
                    $output .= '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
                  $output .= '</div>';
                  $output .= '<div id="menu2" class="tab-pane fade">';
                    $output .= '<h3>Menu 2</h3>';
                    $output .= '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>';
                  $output .= '</div>';
                  $output .= '<div id="menu3" class="tab-pane fade">';
                    $output .= '<h3>Menu 3</h3>';
                    $output .= '<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>';
                  $output .= '</div>';
                $output .= '</div>';
              $output .= '</div>';

              $output .= '<div class="modal-body">';
                $output .= '<ul class="nav nav-tabs">';
                  $output .= '<li class="active"><a data-toggle="tab" href="#home">Home</a></li>';
                  $output .= '<li><a data-toggle="tab" href="#menu4">Menu 1</a></li>';
                  $output .= '<li><a data-toggle="tab" href="#menu5">Menu 2</a></li>';
                  $output .= '<li><a data-toggle="tab" href="#menu6">Menu 3</a></li>';
               $output .= '</ul>';
                $output .= '<div class="tab-content">';
                  $output .= '<div id="home" class="tab-pane fade in active">';
                    $output .= '<h3>HOME</h3>';
                    $output .= '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';
                  $output .= '</div>';
                  $output .= '<div id="menu4" class="tab-pane fade">';
                    $output .= '<h3>Menu 1</h3>';
                    $output .= '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
                  $output .= '</div>';
                  $output .= '<div id="menu5" class="tab-pane fade">';
                    $output .= '<h3>Menu 2</h3>';
                    $output .= '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>';
                  $output .= '</div>';
                  $output .= '<div id="menu6" class="tab-pane fade">';
                    $output .= '<h3>Menu 3</h3>';
                    $output .= '<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>';
                  $output .= '</div>';
                $output .= '</div>';
              $output .= '</div>';
            $output .= '</div>';
          $output .= '</div>';
        $output .= '</div>';
      $output .= '</div>';




      return $output;
    }

    public function getTabContent() {
      $output = '';
      return $output;
    }

  }

$modalAndTab = new modalAndTab();
$cc = $modalAndTab->getModalAndTab();
echo $cc;
