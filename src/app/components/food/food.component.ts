import { NutrientService } from 'src/app/services/nutrient.service';
import { Food } from './../../Food';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { FormArray, FormBuilder } from '@angular/forms';

import {
  FormControl,
  FormGroupDirective,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
  value = '';
  displayedColumns: string[] = ['name', 'cal', 'serving', 'per', 'add'];
  dataSource: Food[] = [];
  testing: number[] = [];

  @Output() btnClick = new EventEmitter();

  constructor(
    private foodService: FoodService,
    private nutrientService: NutrientService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.dataSource = this.foodService.getFood();
  }

  servingForm = this.fb.group({
    foods: this.fb.array([]),
  });

  get foods(){
    return this.servingForm.controls["foods"] as FormArray;
  }
  
  onClick(element: Food) {
    console.log('element', element);
    this.btnClick.emit();
    //element.serving ==
    console.log('value', element.serving);
    this.nutrientService.addToNutrients(element);
  }

  onChange(element: Food, i: number) {
    //element.serving =  this.
    console.log('i', this.testing[i]);
    //this.testing[i] = element;
  }
}
