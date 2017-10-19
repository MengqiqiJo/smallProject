<?php

  echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">';
  echo '<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>';
  echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>';
  echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>';


  echo '<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet">';
  echo '<link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">';
  echo '<script src="https://unpkg.com/vue/dist/vue.js"></script>';
  echo '<script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>';
  echo '<script src="vuejs.js"></script>';
  echo '<link href="../plugin.css" rel="stylesheet">';

class startForm {

  public function getStartForm() {
    $output = '';
    $output .= '<div id="app">';
      $output .= '<div class="wrapper margin-top-32 margin-left-368">';
        $output .= '<div class="inside padding-12">';
          $output .= '<div class="v-container fluid">';
            $output .= '<div class="v-layout wrap">';

              $output .= '<div class="v-flex col-xs-12 col-sm-12">';
                $output .= '<v-checkbox v-model=mode value="Respirologist" label="Respirologist"></v-checkbox>';
              $output .= '</div>';

              $output .= '<div class="v-flex col-xs-12 col-sm-12">';
                $output .= '<v-checkbox v-model=mode value="Pathologist" label="Pathologist"></v-checkbox>';
              $output .= '</div>';

              $output .= '<div class="v-flex col-xs-12 col-sm-12">';
                $output .= '<p class="font-weight-bold">';
                $output .= 'Terms:';
                $output .= '</p>';
                $output .= '<p class="font-weight-bold">';
                $output .= 'I have discussed with my patient that I will be discussing their case in the MILDDER platform';
                $output .= '</p>';
              $output .= ' </div>';


              $output .= '<div class="v-flex col-xs-12 col-sm-12">';
                $output .= '<v-checkbox v-model=agree value="agree" label="I Agree"></v-checkbox>';
              $output .= '</div>';


              $output .= '<div class="v-flex col-xs-12 col-sm-12">';
               $output .= '<v-btn color="primary">Submit</v-btn>';
              $output .= '</div>';

            $output .= '</div>';
          $output .= '</div>';
        $output .= '</div>';
      $output .= '</div>';

    $output .= '</div>';

    $output .= '<script src="https://unpkg.com/vue/dist/vue.js"></script>';
    $output .= '<script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>';
    $output .= '<script src="vuejs.js"></script>';

    return $output;
  }

}

  $startForm = new startForm();
  $cc = $startForm->getStartForm();
  echo $cc;