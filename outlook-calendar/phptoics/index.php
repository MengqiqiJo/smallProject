<?php



class clickToOutlookCalendar {

  public function linkToOutlookCalendarForm() {
    $output = '';
    $output .= '<form method="post" action="downloadics.php">';
      $output .= '<input name="date_start" value="2017-1-16 9:00AM">';
      $output .= '<input name="date_end" value="2017-1-16 10:00AM">';
      $output .= '<input type="hidden" name="location" value="123 Fake St, New York, NY">';
      $output .= '<input type="hidden" name="description" value="This is my description">';
      $output .= '<input type="hidden" name="summary" value="This is my summary">';
      $output .= '<input type="hidden" name="url" value="http://example.com">';
      $output .= '<input type="submit" value="Add to Calendar">';
    $output .= '</form>';
    return $output;
  }

}

$addLinkToButton = new clickToOutlookCalendar();
$cc = $addLinkToButton->linkToOutlookCalendarForm();
echo $cc;