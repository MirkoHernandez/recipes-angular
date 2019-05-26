import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];
    // recipes: Recipe[] = [
    // new Recipe('Recipe1', 'Description1', 'Image1'),
    // new Recipe('Recipe2', 'Description2', 'Image2')
    // ];

    constructor(private recipeService: RecipeService) { }
    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }
}
