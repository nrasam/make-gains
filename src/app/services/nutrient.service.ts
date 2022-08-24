import { Nutrient } from 'src/app/Nutrient';
import { Food } from './../Food';
import { Injectable } from '@angular/core';
import { NUTRIENTS } from 'src/app/nutrients';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NutrientService {
  totalCal: number = 0;

  constructor() {}

  getNutrients(): Nutrient[] {
    return NUTRIENTS;
  }

  addToNutrients(food: Food, amount: number) {
    food.nutrients.forEach((foodNutrient) => {
      var idx = NUTRIENTS.findIndex((nutrient) => {
        return nutrient.name === foodNutrient.name;
      });
      // BUGFIX: 0 is valid
      if (idx != -1) {
        //console.log('nutrient pre-update', NUTRIENTS[idx]);
        NUTRIENTS[idx].intake += foodNutrient.intake * amount;
        //console.log('nutrient updated', NUTRIENTS[idx]);
      }
    });
    console.log('food', food);
  }

  addToCalories(calories: number) {
    this.totalCal += calories;
  }

  getTotalCalories(): number {
    //const calories = of(this.totalCal);
    return this.totalCal;
  }
}
