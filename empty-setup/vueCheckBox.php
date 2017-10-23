<?php

echo "<link rel='stylesheet prefetch' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic'>";
echo "<link rel='stylesheet prefetch' href='https://fonts.googleapis.com/icon?family=Material+Icons'>";
echo "<link rel='stylesheet prefetch' href='https://unpkg.com/vue-material@latest/dist/vue-material.css'>";
echo "<link rel='stylesheet' href='css/style.css'>";

/**
*
*/
class popUpWithCheckBox {

  function popUpWithCH() {
    $output = '';
    $output .= '<div id="app">';
      $output .= '<md-toolbar>';
      $output .= '<h1 class="md-title">My Title</h1>';
      $output .= '</md-toolbar>';

      $output .= '<div class="main-content">';
        $output .= '<div>';
          $output .= '<md-radio v-model="radio1" name="my-test-group1" md-value="Respirologist">Respirologist</md-radio>';
          $output .= '<md-radio v-model="radio1" name="my-test-group1" md-value="Pathologist">Pathologist</md-radio>';
        $output .= '</div>';
        $output .= '<div v-if="radio1==\'Respirologist\' || radio1==\'Pathologist\'">';
        $output .= '</div>';
        $output .= '<div v-else>';
        $output .= '<span>(* Please select role)</span>';
        $output .= '<span>{{radio1}}</span>';

        $output .= '</div>';
        $output .= '<div>';
          $output .= '<p>Terms: I have discussed with my patient that I will be discussing their case in the MILDDER platform.</p>';
        $output .= '</div>';

        $output .= '<div>';
          $output .= '<md-checkbox  id="my-test5" name="my-test5" v-model="checkbox1" class="md-primary" required>I Agree</md-checkbox>';
          $output .= '<span class="md-error">Validation message</span>';
          $output .= '<md-tooltip md-delay="400" md-direction="left-bottom">My tooltip</md-tooltip>';
          $output .= '</md-avatar>';
        $output .= '</div>';

        $output .= '<div v-if="!checkbox1">';
          $output .= '<span>(* Please choose "I Agree")</span>';
          $output .= '<span>{{checkbox1}}</span>';
        $output .= '</div>';

        $output .= '<div v-if="(radio1==\'Respirologist\' || radio1==\'Pathologist\') && checkbox1">';
          $output .= '<div>';
           $output .= '<md-button href="/mildder9" class="md-raised md-primary">submit</md-button>';
          $output .= '</div>';
        $output .= '</div>';

        $output .= '<div v-else>';
          $output .= '<md-button href="" class="md-raised md-primary">submit</md-button>';
        $output .= '</div>';

      $output .= '</div>';
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
