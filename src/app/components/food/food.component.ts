import { Food } from './../../Food';
import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
  value = '';
  displayedColumns: string[] = ['name', 'cal', 'serving', 'per'];
  dataSource: Food[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.dataSource = this.foodService.getFood();
  }
}
