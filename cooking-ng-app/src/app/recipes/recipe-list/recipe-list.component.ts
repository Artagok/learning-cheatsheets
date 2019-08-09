import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // Array of all recipes
  recipes: Recipe[] = [
    new Recipe('Ceviche', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'https://cevicheperuano.net/wp-content/uploads/2018/10/ceviche-carretillero_700x467.jpg'),
    new Recipe('Lomo Saltado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'https://cocina-casera.com/wp-content/uploads/2017/12/Lomo-saltado.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
