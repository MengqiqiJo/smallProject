import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: ['.demo {background-color: blue}'],
  template: '<div [innerHTML]="someHtmlCode"></div>',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'binding';
  public someHtmlCode = '';

  constructor() {
    this.someHtmlCode = '<div class="demo"><b>This is my HTML.</b></div>';
  }
}

