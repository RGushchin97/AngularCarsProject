import {CarModel} from '../../models/car.model';
import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  displayedColumns: string[] = ['make', 'date', 'mileage', 'color', 'forSale', 'delBtns'];
  cars: Array<CarModel>;
  ignoreTextCase = true;

  constructor(private service: CarsService) {  }

  ngOnInit() {
    this.loadCars();
  }

  deleteCar(car: CarModel) {
    if (confirm('Are you sure you want to delete this car?')) {
      this.service.deleteCar(car);
    }
    this.loadCars();
  }

  private loadCars() {
    this.cars = [];
    this.service.getCars().map((car) => {
      this.cars.push(car);
    });
  }
}



