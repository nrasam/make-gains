import { NutrientService } from 'src/app/services/nutrient.service';
import { Nutrient } from 'src/app/Nutrient';
import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/Food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css'],
})
export class FoodItemComponent implements OnInit {
  @Input() food: Food = {} as Food;
  @Input() name: string = 'test';
  @Input() cal: number = 45;
  @Input() nutrients: Nutrient[] = [];
  @Input() serving: number = 1;
  @Input() per: string = 'cup';
  newServing: number = 0;
  newCal: number = 0;

  constructor(
    private foodService: FoodService,
    private nutrientService: NutrientService
  ) {}

  ngOnInit(): void {
    this.name = this.food.name;
    this.cal = this.food.cal;
    this.nutrients = this.food.nutrients;
    this.serving = this.food.serving;
    this.per = this.food.per;

    this.newServing = this.serving;
    this.newCal = this.cal;
  }

  updateCal(): void {
    if (this.newServing >= 0) {
      this.newCal = (this.newServing / this.serving) * this.cal;
    }
  }

  onClick(): void {
    let amount = this.newServing / this.serving;
    /*     for (let i = 0; i < amount; i++){
      this.nutrientService.addToNutrients(this.food);
    } */
    this.nutrientService.addToNutrients(this.food, amount);
    this.nutrientService.addToCalories(this.newCal);
  }
}
