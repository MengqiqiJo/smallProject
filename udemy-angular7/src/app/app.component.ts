import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  	h3 {
  		color: darkblue;
  	}
  `]
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'udemy-angular7';
}
