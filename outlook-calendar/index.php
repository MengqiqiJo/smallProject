<?php

class clickToOutlookCalendar {

  public function linkToOutlookCalendar() {
    $output = '';
    $output .= '<div>';
      $output .= '<a href="http://localhost/vuejstimer/smallProject/outlook-calendar/getics.php">click me</a>';
    $output .= '</div>';

    return $output;
  }

}

$addLinkToButton = new clickToOutlookCalendar();
$cc = $addLinkToButton->linkToOutlookCalendar();
echo $cc;