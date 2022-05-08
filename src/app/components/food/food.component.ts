import { NutrientService } from 'src/app/services/nutrient.service';
import { Food } from './../../Food';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
  value = '';
  displayedColumns: string[] = ['name', 'cal', 'serving', 'per', 'add'];
  dataSource: Food[] = [];

  @Output() btnClick = new EventEmitter();

  constructor(
    private foodService: FoodService,
    private nutrientService: NutrientService
  ) {}

  ngOnInit(): void {
    this.dataSource = this.foodService.getFood();
  }

  onChange(): void {
    if (this.value) {
      this.dataSource = this.dataSource.filter((food) =>
        food.name.toLowerCase().includes(this.value.toLowerCase())
      );
    }else{
      this.dataSource = this.foodService.getFood();
    }
  }
}
