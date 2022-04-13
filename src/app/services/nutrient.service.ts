import { Nutrient } from 'src/app/Nutrient';
import { Food } from './../Food';
import { Injectable } from '@angular/core';
import { NUTRIENTS } from 'src/app/nutrients';

@Injectable({
  providedIn: 'root',
})
export class NutrientService {
  constructor() {}

  getNutrients(): Nutrient[] {
    return NUTRIENTS;
  }

  addToNutrients(food: Food) {
    food.nutrients.forEach((foodNutrient) => {
      var idx = NUTRIENTS.findIndex((nutrient) => {
        return nutrient.name === foodNutrient.name;
      });
      if (idx) {
        console.log('nutrient pre-update', NUTRIENTS[idx]);
        NUTRIENTS[idx].dv += foodNutrient.dv;
        console.log('nutrient updated', NUTRIENTS[idx]);
      }
    });
    console.log('food', food);
  }
}
