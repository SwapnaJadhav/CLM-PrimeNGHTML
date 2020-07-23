import { Component, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
// import { CarService } from './carservice';
// import { Car } from './car';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cars: Car[];

  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.cols = [
        { field: 'vin', header: 'Vin' },
        {field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
    ];
  }

}
