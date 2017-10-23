<?php

echo '<script src="https://npmcdn.com/vue/dist/vue.js"></script>';
echo '<script src="https://npmcdn.com/vue-router/dist/vue-router.js"></script>';
echo '<script src="first.js"></script>';

class addLinkToButton {

  public function linkToButton() {
    $output = '';
    $output .= '<div id="app">';
      $output .= '<router-link to="/" tag="img" src="https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg"></router-link>';
      $output .= '<router-link to="/">/Home</router-link>';
      $output .= '<router-link to="/foo">/foo</router-link>';
      $output .= '<router-view></router-view>';
    $output .= '</div>';

    return $output;

  }

}

$addLinkToButton = new addLinkToButton();
$cc = $addLinkToButton->linkToButton();
echo $cc;