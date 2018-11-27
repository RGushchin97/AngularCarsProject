import {CarModel} from '../../models/car.model';
import {Component, OnInit} from '@angular/core';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarsService]
})

export class CarsComponent implements OnInit {
  displayedColumns: string[] = ['make', 'date', 'mileage', 'color', 'forSale', 'delBtns'];
  cars: Array<CarModel> = [];
  ignoreTextCase = true;

  constructor(private service: CarsService) {
  }

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
    this.service.getCars().subscribe((data) => this.cars = data);
  }
}



