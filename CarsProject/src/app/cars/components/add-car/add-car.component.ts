import { Component, OnInit } from '@angular/core';
import {CarModel} from '../../models/car.model';
import {Color} from '../../models/color.model';
import {FormBuilder, Validators} from '@angular/forms';
import {CarsService} from '../../services/cars.service';
import {Router} from '@angular/router';
import {CarsComponent} from '../cars/cars.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  colors = Color;
  today = new Date(Date.now());
  addingForm: any;
  cars: Array<CarModel>;
  subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder,
              private service: CarsService,
              private router: Router) {
    this.addingForm = this.fb.group({
      makeControl: [null, [Validators.required]],
      dateControl: [null, [Validators.required]],
      mileageControl: [null, [Validators.required, Validators.min(0), Validators.pattern('([0-9]*\.[0-9]+|[0-9]+)')]],
      colorControl: [null, [Validators.required]],
      forSaleControl: [null]
  });
  }

  ngOnInit() {
    this.loadCars();
  }

  saveCar() {
    this.subscriptions.push(this.service.createCar(this.parseCar()).subscribe(() => {
      this.loadCars();
    }));
    this.router.navigate(['']);
  }

  parseCar() {
    return new CarModel(0,
      this.addingForm.get('makeControl').value,
      this.addingForm.get('mileageControl').value,
      this.addingForm.get('dateControl').value,
      this.addingForm.get('colorControl').value,
      this.addingForm.get('forSaleControl').value);
  }

  getErrorMessage(control) {
    let errorMessage: String = null;
    switch (control) {
      case 'makeControl': errorMessage = 'Make control is required'; break;
      case 'dateControl': errorMessage = 'Manufacture date is required'; break;
      case 'mileageControl': errorMessage = 'Mileage is required. It must be a number and must be bigger than 0'; break;
      case 'colorControl': errorMessage = 'Color is required'; break;
    }
    if (this.addingForm.get(control).invalid) {
      return errorMessage;
    }
  }

  loadCars() {
    this.subscriptions.push(this.service.cars.subscribe(cars => {
      this.cars = cars as CarModel[];
    }));
  }
}
