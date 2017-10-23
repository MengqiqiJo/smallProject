<?php

echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">';
echo '<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>';
echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>';
echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>';

echo "<link rel='stylesheet prefetch' href='https://unpkg.com/vue-material@latest/dist/vue-material.css'>";
echo "<link rel='stylesheet' href='css/style.css'>";
echo "<link rel='stylesheet' href='../plugin.css'>";
echo "<link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic'>";
echo "<link rel='stylesheet' href='//fonts.googleapis.com/icon?family=Material+Icons'>";

/**
 *
 */
class popUpWithCheckBox {

  function popUpWithCH() {
    $output = '';
    $output .= '<div id="app">';

    $output .= '<md-toolbar>';
      $output .= '<md-menu>';
        $output .= '<md-button md-menu-trigger>Default</md-button>';

        $output .= '<md-menu-content>';
          $output .= '<md-menu-item>My Item 1</md-menu-item>';
          $output .= '<md-menu-item>My Item 2</md-menu-item>';
          $output .= '<md-menu-item>My Item 3</md-menu-item>';
        $output .= '</md-menu-content>';
      $output .= '</md-menu>';

      $output .= '<md-menu md-align-trigger>';
        $output .= '<md-button md-menu-trigger>Align trigger</md-button>';

        $output .= '<md-menu-content>';
          $output .= '<md-menu-item>My Item 1</md-menu-item>';
          $output .= '<md-menu-item>My Item 2</md-menu-item>';
          $output .= '<md-menu-item>My Item 3</md-menu-item>';
        $output .= '</md-menu-content>';
      $output .= '</md-menu>';

      $output .= '<md-menu :md-offset-x="154" md-offset-y="12">';
        $output .= '<md-button md-menu-trigger>Custom offset</md-button>';

        $output .= '<md-menu-content>';
          $output .= '<md-menu-item>My Item 1</md-menu-item>';
          $output .= '<md-menu-item>My Item 2</md-menu-item>';
          $output .= '<md-menu-item>My Item 3</md-menu-item>';
        $output .= '</md-menu-content>';
     $output .= ' </md-menu>';
    $output .= '</md-toolbar>';

    $output .= '<md-layout md-gutter>';
      $output .= '<md-layout md-flex="60" md-flex-offset="20">';
        $output .= '<md-stepper>';

        $output .= '<md-step :md-editable="true" md-label="Email" :md-error="!mailValid" :md-continue="mailValid" :md-message="invalidMessage">';
          $output .= '<p>Please enter your emailaddress</p>';
          $output .= '<md-input-container :class="{\'md-input-invalid\': !mailValid}">';
          $output .= '<md-input type="email" v-model="mail" required/>';
          $output .= '<label>Email</label>';
          $output .= '</md-input-container>';
        $output .= '</md-step>';

        $output .= '<md-step :md-editable="true" md-label="Name" :md-error="!nameValid" :md-continue="nameValid" :md-message="invalidNameMessage">';
          $output .= '<p>Please enter your name</p>';
          $output .= '<md-input-container :class="{\'md-input-invalid\': !nameValid}">';
          $output .= '<md-input type="name" v-model="name" required/>';
          $output .= '<label>name</label>';
          $output .= '</md-input-container>';
        $output .= '</md-step>';

        $output .= '<md-step :md-editable="true" md-label="Password" :md-error="!passwordValid" :md-continue="passwordValid" :md-message="invalidPasswordMessage">';
          $output .= '<p>Please enter your password</p>';
          $output .= '<md-input-container :class="{\'md-input-invalid\': !passwordValid}">';
          $output .= '<md-input type="password" v-model="password" required/>';
          $output .= '<label>password</label>';
          $output .= '</md-input-container>';
        $output .= '</md-step>';

        $output .= '<md-step :md-editable="true" md-label="Phone" :md-error="!phoneValid" :md-continue="phoneValid" :md-message="invalidPhoneMessage">';
          $output .= '<p>Please enter your phone number</p>';
          $output .= '<md-input-container :class="{\'md-input-invalid\': !phoneValid}">';
          $output .= '<md-input type="phone" v-model="phone" required/>';
          $output .= '<label>phone</label>';
          $output .= '</md-input-container>';
        $output .= '</md-step>';

      $output .= '</md-stepper>';
    $output .= '</md-layout>';
  $output .= '</md-layout>';


      $output .= '<md-layout md-gutter>';
        $output .= '<md-layout md-flex="20" md-flex-offset="30">';
          $output .= '<md-radio v-model="radio1" name="my-test-group1" md-value="Respirologist">Respirologist</md-radio>';
        $output .= '</md-layout>';
      $output .= '</md-layout>';

      $output .= '<md-layout md-gutter>';
        $output .= '<md-layout md-flex="10" md-flex-offset="30">';
          $output .= '<md-radio v-model="radio1" name="my-test-group1" md-value="Pathologist">Pathologist</md-radio>';
        $output .= '</md-layout>';
      $output .= '</md-layout>';

      $output .= '<md-layout md-gutter>';
        $output .= '<md-layout md-flex="40" md-flex-offset="30">';
          $output .= '<p class="font-bold font-size-14"><span class="font-bold font-size-18">Terms:</span> I have discussed with my patient that I will be discussing their case in the MILDDER platform.</p>';
        $output .= '</md-layout>';
      $output .= '</md-layout>';

      $output .= '<md-layout md-gutter>';
        $output .= '<md-layout md-flex="60" md-flex-offset="30">';
          $output .= '<md-checkbox  id="my-test5" name="my-test5" v-model="checkbox1" class="md-primary" required>I Agree</md-checkbox>';
        $output .= '</md-layout>';
      $output .= '</md-layout>';

      $output .= '<md-layout md-gutter>';
        $output .= '<md-layout md-flex="60" md-flex-offset="30">';
          $output .= '<md-layout v-if="radio1==\'Respirologist\' || radio1==\'Pathologist\'">';
          $output .= '</md-layout>';
          $output .= '<md-layout v-else>';
           $output .= '<span class="color-f00000">(* Please select role)</span>';
          $output .= '</md-layout>';
        $output .= '</md-layout>';
      $output .= '</md-layout>';

      $output .= '<md-layout md-gutter>';
        $output .= '<md-layout md-flex="40" md-flex-offset="30">';
          $output .= '<md-layout v-if="!checkbox1">';
            $output .= '<span class="color-f00000">(* Please choose "I Agree")</span>';
          $output .= '</md-layout>';
        $output .= '</md-layout>';
      $output .= '</md-layout>';

      $output .= '<md-layout md-gutter>';
        $output .= '<md-layout md-flex="60" md-flex-offset="35">';
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
