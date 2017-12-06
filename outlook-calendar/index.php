<?php

class clickToOutlookCalendar {

  public function linkToOutlookCalendar() {
    $output = '';
    $output .= '<div>';
      $output .= '<a  href="getics.php">click</a>';
    $output .= '</div>';

    return $output;

  }

}

$addLinkToButton = new clickToOutlookCalendar();
$cc = $addLinkToButton->linkToOutlookCalendar();
echo $cc;