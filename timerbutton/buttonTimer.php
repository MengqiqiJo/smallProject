<?php

  echo '<script type="text/javascript" src="https://momentjs.com/downloads/moment.js"></script>';
  echo '<script src="https://unpkg.com/vue"></script>';
  echo '<script type="text/javascript" src="buttonTimer.js"></script>';
  echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">';
  echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>';
  echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>';

  class buttonTimer {

    public function getButtonTimer() {

      $now = new DateTime();
      $currenttimestamp = $now->getTimestamp();
      $currenttimestamp = $currenttimestamp + 8;
      $currenttimestamp2 = $currenttimestamp + 12;

      $output = '';
      $output .= '<div id="app" class="container">';
      $output .= '<h2>';
        $output .= '{{datenow}}';
      $output .= '</h2>';
      $output .= '<table class="table table-striped">';
        $output .= '<thead>';
         $output .= '<tr>';
            $output .= '<th>';
            $output .= 'Firstname';
            $output .= '</th>';
            $output .= '<th>';
            $output .= 'Start Time';
            $output .= '</th>';
            $output .= '<th>';
            $output .= 'End Time';
            $output .= '</th>';
            $output .= '<th>';
            $output .= 'Button';
            $output .= '</th>';
          $output .= '</tr>';
        $output .= '</thead>';
        $output .= '<tbody>';
          $output .= $this->tables($currenttimestamp, $currenttimestamp2, 1);
          $output .= $this->tables($currenttimestamp + 2, $currenttimestamp2 + 5, 2);
          $output .= $this->tables($currenttimestamp + 7, $currenttimestamp2 + 12, 3);
          $output .= $this->tables($currenttimestamp + 17, $currenttimestamp2 + 27, 4);
        $output .= '</tbody>';
      $output .= '</table>';
      $output .= '</div>';

      $output .= '<script type="text/javascript" src="buttonTimer.js"></script>';

      return $output;
    }

    public function tables($startTime, $endTime, $btnNumber) {
      $output = '';
      $output .= '<tr>';
        $output .= '<td>';
          $output .= 'John';
        $output .= '</td>';
        $output .= '<td>';
          $output .= $startTime;
        $output .= '</td>';
        $output .= '<td>';
          $output .= $endTime;
        $output .= '</td>';
        $output .= '<td>';
          $output .= '<button class="btn btn-success" v-show="showButton(' . $startTime . ', ' . $endTime. ') == true">';
            $output .= $btnNumber;
          $output .= '</button>';
        $output .= '</td>';
      $output .= '</tr>';

      return $output;
    }

  }

$buttonTimer = new buttonTimer();
$cc = $buttonTimer->getButtonTimer();
echo $cc;
