  <?php

  echo '<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jspdf/0.9.0rc1/jspdf.min.js"></script>';
  echo '<script type="text/javascript" src="./js/html2canvas.js"></script>';
  echo '<script type="text/javascript" src="./js/jsPdf.debug.js"></script>';
  echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">';
  echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>';
  echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>';
  echo '<link rel="stylesheet" href="certificatePage.css">';
  echo '<script type="text/javascript" src="certificatePage.js"></script>';

class page {

  public function certificatePage() {

    $output = '';

    $output .= '<div class="text-center">';
    $output .= '<button id="btn" class="btn btn-primary">';
      $output .= 'Download';
    $output .= '</button>';
    $output .= '</div>';




    $output .= '<script type="text/javascript" src="certificatePage.js"></script>';



    return $output;
  }

}

$page = new page();
$cc = $page->certificatePage();
echo $cc;