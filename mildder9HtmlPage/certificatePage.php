  <?php

  // echo '<script type="text/javascript" src="certificatePage.js"></script>';
  echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">';
  echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>';
  echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>';
  echo '<link rel="stylesheet" href="certificatePage.css">';

class page {

  public function certificatePage() {
    $nameOfParticipant = "name of participant";
    $locationOfTheActivity = "Location of the activity";
    $dateRangeOfActivity = "Date range of the acticity";
    $numberOfHoursAttended = "Number of hours attended";

     $output = '';
     $output .= '<div class="container margin-top-26 margin-bottom-26 color-1F497C border-1F497C-solid-3px font-italic">';
      $output .= '<div class="col-sm-12 col-md-12 col-lg-12 row margin-top-6">';
      $output .= ' <img class="float-left image-width image-height" src="mildder_site_logo.png"/>';
      $output .= '</div>';
       $output .= '<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-center">';
         $output .= '<div class="margin-top-6 margin-bottom-46 font-weight-bold">';
           $output .= '<p class=" ">';
            $output .= 'Dr. Shane Shapera,';
           $output .= '</p>';
           $output .= '<p>';
            $output .= 'Toronto General Hospital';
           $output .= '</p>';
           $output .= '<p class="font-weight-normal">';
            $output .= 'Certifies that';
           $output .= '</p>';
           $output .= '<p>';
            $output .= '[' . $nameOfParticipant . ']';
           $output .= '</p>';
           $output .= '<p class="font-weight-normal">';
            $output .= 'Has attended the';
           $output .= '</p>';
         $output .= '</div>';

         $output .= '<div class="margin-top-6 margin-bottom-46 font-weight-bold">';
           $output .= '<p>';
            $output .= 'Multi-disciplinary Interstitial lung Disease';
           $output .= '</p>';
           $output .= '<p>';
            $output .= 'Discussions with Experts Remotely Rounds';
           $output .= '</p>';
         $output .= '</div>';

         $output .= '<div class="margin-top-6 margin-bottom-46 font-weight-bold">';
           $output .= '<p>';
            $output .= '<span class="font-weight-normal">in</span> ' . '[' . $locationOfTheActivity . ']';
           $output .= '</p>';
           $output .= '<p>';
            $output .= '[' . $dateRangeOfActivity . ']';
           $output .= '</p>';
         $output .= '</div>';

         $output .= '<div class="margin-top-6 margin-bottom-46 font-weight-bold">';
           $output .= '<p>';
            $output .= '[' . $numberOfHoursAttended . ']';
           $output .= '</p>';
         $output .= '</div>';

         $output .= '<div class="margin-top-38 margin-bottom-46">';
          // $output .= '<hr class="width-24">';
         $output .= '<div class="margin-left-auto margin-right-auto width-24 border-top-1F497C-solid-1px">';
         $output .= '</div>';
           $output .= '<p>';
            $output .= 'Chair,';
           $output .= '</p>';
           $output .= '<p>';
            $output .= 'Planning Committee';
           $output .= '</p>';
         $output .= '</div>';
       $output .= '</div>';

       $output .= '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">';
         $output .= '<div class="row">';
           // $output .= '<div class="col-sm-2 margin-top-38 border-left-1F497C-solid-3px height-46">';
           //  $output .= '</div>';
          $output .= '<div class="margin-top-38 border-left-1F497C-solid-3px height-46">';
           $output .= '<p class="padding-top-56 padding-left-12">';
           $output .= 'The Multi-disciplinary <br/>
                        Interstitial Lung <br/>
                        Disease Discussions <br/>
                        with Experts Remotely<br/>
                        (MILDDER) Rounds is<br/>
                        a self-approved group<br/>
                        learning activity<br/>
                        (Section 1) as defined<br/>
                        by the Maintenance of<br/>
                        Certification Program<br/>
                        of the Royal College of<br/>
                        Physicians and<br/>
                        Surgeons of Canada.';
           $output .= '</p>';
           $output .= '</div>';
         $output .= '</div>';
       $output .= '</div>';
       $output .= '';
       $output .= '';
       $output .= '';
       $output .= '';
       $output .= '';
       $output .= '';
     $output .= '</div>';

     return $output;
  }

}

$page = new page();
$cc = $page->certificatePage();
echo $cc;