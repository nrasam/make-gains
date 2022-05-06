import { Injectable } from '@angular/core';
import { Food } from '../Food';
import { FOODS } from '../foods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFood(): Food[] {
    return FOODS;
  }

  updateFood(name: string): void {
    //TODO
  }
}
