import { Component, OnInit } from '@angular/core';
import { Nutrient } from 'src/app/Nutrient';
import { NutrientService } from 'src/app/services/nutrient.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css'],
})
export class NutritionComponent implements OnInit {
  displayedColumns: string[] = ['nutrient', 'intake', 'dv', 'limit'];
  dataSource: Nutrient[] = [];

  today: string = new Date().toDateString();

  totalCal: number = 0;

  constructor(private nutrientService: NutrientService) {}

  ngOnInit(): void {
    this.dataSource = this.nutrientService.getNutrients();
    //this.nutrientService.getTotalCalories().subscribe((cal) => (this.totalCal = cal));
    this.totalCal = this.nutrientService.getTotalCalories();

    setInterval(() => {
      this.totalCal = this.nutrientService.getTotalCalories();
    }, 500);

  }

  onChange(): void{
    //this.totalCal = this.nutrientService.getTotalCalories();
  }
}
