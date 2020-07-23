import { Component, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { Car } from './car';
import { CarService } from './carservice';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cars1: Car[];

  // cols: any[];
  scrollableCols: any[];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCarsSmall().then(cars => this.cars1 = cars);

    this.scrollableCols = [
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];
  }

}
