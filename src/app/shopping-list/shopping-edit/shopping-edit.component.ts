import { Component, OnInit,ViewChild,ElementRef, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;
    ingredientAdded = new EventEmitter<Ingredient>();
    
    constructor() { }
    
    ngOnInit() {
    }

    onAddItem() {
	const ingName = this.nameInputRef.nativeElement.value;
	const ingAmount = this.nameInputRef.nativeElement.value;
	const newIngredient= new Ingredient(ingName, ingAmount)
	this.ingredientAdded.emit(newIngredient);
    }
}
