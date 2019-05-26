import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Recipe1',
            'Description1',
            'Image1',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 6)
            ]),
        new Recipe('Recipe20',
            'Description20',
            'Image20',
            [
                new Ingredient('Buns', 3),
                new Ingredient('Meat', 2)
            ]),
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }



    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }



}
