import { Component, OnInit } from '@angular/core';
import { Nutrient } from 'src/app/Nutrient';
import { NutrientService } from 'src/app/services/nutrient.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css'],
})
export class NutritionComponent implements OnInit {
  displayedColumns: string[] = ['nutrient', 'dv', 'intake', 'limit'];
  dataSource: Nutrient[] = [];

  today: string = new Date().toDateString();

  constructor(private nutrientService: NutrientService) {}

  ngOnInit(): void {
    this.dataSource = this.nutrientService.getNutrients();
  }
}
