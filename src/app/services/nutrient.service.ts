import { Injectable } from '@angular/core';
import { Nutrient } from '../Nutrient';
import { NUTRIENTS } from 'src/app/nutrients';

@Injectable({
  providedIn: 'root',
})
export class NutrientService {
  constructor() {}

  getNutrients(): Nutrient[] {
    return NUTRIENTS;
  }
}
