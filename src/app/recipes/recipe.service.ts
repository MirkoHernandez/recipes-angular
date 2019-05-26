import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Recipe1', 'Description1', 'Image1'),
        new Recipe('Recipe20', 'Description20', 'Image20'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
