<?php

echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">';
echo '<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>';
echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>';
echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>';

echo "<link rel='stylesheet prefetch' href='https://unpkg.com/vue-material@latest/dist/vue-material.css'>";
echo "<link rel='stylesheet' href='../plugin.css'>";

/**
*
*/
class popUpWithCheckBox {

  function duplicateFrameStart($content, $a = "20", $b = "30") {
    $output = '';
    $output .= '<md-layout md-gutter>';
      $output .= '<md-layout md-flex=' . $a .' md-flex-offset='. $b .'>';
        $output .= $content;
      $output .= '</md-layout>';
    $output .= '</md-layout>';

      return $output;
  }

  function radioBox($value, $model) {
    $output = '<md-radio v-model='.$model.' name="my-test-group1" md-value=' . $value . '>';
    $output .= $value ;
    $output .= '</md-radio>';
    return $output;
  }

  function textContent() {
    $output = '<p class="font-bold font-size-14">';
      $output .= '<span class="font-bold font-size-18">';
       $output .= 'Terms:';
      $output .= '</span>';
      $output .= 'I have discussed with my patient that I will be discussing their case in the MILDDER platform.';
    $output .= '</p>';
    return $output;
  }

  function checkBox($textContent, $modelContent) {
    $output = '<md-checkbox  id="my-test5" name="my-test5" v-model=' . $modelContent . ' class="md-primary" required>';
    $output .= $textContent ;
    $output .= '</md-checkbox>';
    return $output;
  }

  function button($link, $content) {
    $output = '<md-button href="'.$link.'" class="md-raised md-primary">' ;
      $output .= $content;
    $output .= '</md-button>';
    return $output;
  }

  function popUpWithCH() {
    $output = '';
    $output .= '<div id="app">';

      $output .= '<md-toolbar>';
        $output .= '<h1 class="md-title"></h1>';
      $output .= '</md-toolbar>';

      $output .= $this->duplicateFrameStart($this->radioBox("Respirologist", "radio1"));
      $output .= $this->duplicateFrameStart($this->radioBox("Pathologist", "radio1"));
      $output .= $this->duplicateFrameStart($this->textContent(), "40", "30");
      $output .= $this->duplicateFrameStart($this->checkBox("I Agree", "checkbox1"), "40", "30");
      $output .= '<p>{{checkbox1}}</p>';


      $content = '';
      $content .= '<md-layout v-if="radio1==\'Respirologist\' || radio1==\'Pathologist\'">';
      $content .= '</md-layout>';
      $content .= '<md-layout v-else>';
       $content .= '<span class="color-f00000">';
        $content .= '(* Please select role)';
       $content .= '</span>';
      $content .= '</md-layout>';
      $output .= $this->duplicateFrameStart($content);

      $content = '';
      $content .= '<md-layout v-if="!checkbox1">';
        $content .= '<span class="color-f00000">';
          $content .= '(* Please choose "I Agree")';
        $content .= '</span>';
      $content .= '</md-layout>';
      $output .= $this->duplicateFrameStart($content);

      $output .= '<md-layout v-if="(radio1==\'Respirologist\' || radio1==\'Pathologist\') && checkbox1">';
        $output .= $this->duplicateFrameStart($this->button("/mildder9", "submit"), "40", "30");
      $output .= '</md-layout>';
      $output .= '<md-layout v-else>';
        $output .= $this->duplicateFrameStart($this->button("", "submit"), "40", "30");
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
