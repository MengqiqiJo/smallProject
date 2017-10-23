<?php

echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">';
echo '<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>';
echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>';
echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>';

echo "<link rel='stylesheet prefetch' href='https://unpkg.com/vue-material@latest/dist/vue-material.css'>";
echo "<link rel='stylesheet' href='css/style.css'>";
echo "<link rel='stylesheet' href='../plugin.css'>";

/**
*
*/
class popUpWithCheckBox {

  function popUpWithCH() {
    $output = '';
    $output .= '<div id="app">';

      $output .= '<md-toolbar>';
        $output .= '<h1 class="md-title"></h1>';
      $output .= '</md-toolbar>';

      $output .= '<md-layout md-gutter>';
        $output .= '<md-layout md-flex="10" md-flex-offset="40">';
          $output .= '<md-radio v-model="radio1" name="my-test-group1" md-value="Respirologist">Respirologist</md-radio>';
          $output .= '<md-radio v-model="radio1" name="my-test-group1" md-value="Pathologist">Pathologist</md-radio>';
        $output .= '</md-layout>';

        $output .= '<md-layout md-flex="40" md-flex-offset="30">';
          $output .= '<p class="font-bold font-size-14"><span class="font-bold font-size-18">Terms:</span> I have discussed with my patient that I will be discussing their case in the MILDDER platform.</p>';
        $output .= '</md-layout>';
        $output .= '<md-layout md-flex="60" md-flex-offset="40">';
          $output .= '<md-checkbox  id="my-test5" name="my-test5" v-model="checkbox1" class="md-primary" required>I Agree</md-checkbox>';
        $output .= '</md-layout>';

        $output .= '<md-layout md-flex="60" md-flex-offset="40">';
          $output .= '<md-layout v-if="radio1==\'Respirologist\' || radio1==\'Pathologist\'">';
          $output .= '</md-layout>';
          $output .= '<md-layout v-else>';
           $output .= '<span class="color-f00000">(* Please select role)</span>';
          $output .= '</md-layout>';
        $output .= '</md-layout>';
        $output .= '<md-layout md-flex="60" md-flex-offset="40">';
          $output .= '<md-layout v-if="!checkbox1">';
            $output .= '<span class="color-f00000">(* Please choose "I Agree")</span>';
          $output .= '</md-layout>';
        $output .= '</md-layout>';

        $output .= '<md-layout md-flex="60" md-flex-offset="40">';
          $output .= '<md-layout v-if="(radio1==\'Respirologist\' || radio1==\'Pathologist\') && checkbox1">';
            $output .= '<md-layout>';
              $output .= '<md-button href="/mildder9" class="md-raised md-primary">submit</md-button>';
             $output .= '</md-layout>';
          $output .= '</md-layout>';
          $output .= '<md-layout v-else>';
            $output .= '<md-button href="" class="md-raised md-primary">submit</md-button>';
          $output .= '</md-layout>';
        $output .= '</md-layout>';
      $output .= '</md-layout>';
    $output .= '</div>';

    $output .= '<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.6/vue.min.js"></script>';
    $output .= '<script src="https://unpkg.com/vue-material@latest"></script>';
    $output .= '<script src="js/index.js"></script>';

    return $output;
  }
}
$popUpWithCheckBox =  new popUpWithCheckBox();
$cc = $popUpWithCheckBox->popUpWithCH();
echo $cc;
