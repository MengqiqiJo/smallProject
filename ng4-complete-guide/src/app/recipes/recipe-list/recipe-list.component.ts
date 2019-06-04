import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [
	new Recipe('A Test Recipe', 'This is simply a test', 'https://www.w3schools.com/howto/img_snow.jpg'),
	new Recipe('A Test Recipe', 'This is simply a test', 'https://www.w3schools.com/howto/img_snow.jpg')];

  constructor() { }

  ngOnInit() {
  }

}
