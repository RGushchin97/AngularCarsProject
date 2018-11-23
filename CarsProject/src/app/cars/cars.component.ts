import {CarModel} from './car.model';
import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CarsService} from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
  displayedColumns: string[] = ['make', 'date', 'mileage', 'color', 'forSale', 'delBtns'];
  cars: Array<CarModel>;

  constructor(private service: CarsService) {  }

  ngOnInit() {
    this.cars = this.service.cars;
  }

  deleteCar(car: CarModel) {
    if (confirm('Are you sure you want to delete this car?')) {
      this.service.deleteCar(car);
      this.cars = this.cars.filter(c => c !== car);
    }
  }
}



