import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { FoodComponent } from './components/food/food.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FoodItemComponent } from './components/food-item/food-item.component';
import { FoodItemHeaderComponent } from './components/food-item-header/food-item-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NutritionComponent,
    FoodComponent,
    FoodItemComponent,
    FoodItemHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
