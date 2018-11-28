import {CarModel} from '../../models/car.model';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarsService} from '../../services/cars.service';
import {Subscription} from 'rxjs';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarsService]
})

export class CarsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['make', 'date', 'mileage', 'color', 'forSale', 'delBtns'];
  cars: Array<CarModel> = [];
  ignoreTextCase = true;
  private subscriptions: Subscription[] = [];

  constructor(private service: CarsService,
              private loadingService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.loadCars();
  }

  deleteCar(car: CarModel) {
    if (confirm('Are you sure you want to delete this car?')) {
      this.loadingService.show();
      this.subscriptions.push(this.service.deleteCar(car).subscribe(() => {
        this.loadCars();
      }));
      this.loadingService.hide();
    }

  }

  loadCars() {
    this.loadingService.show();
    this.subscriptions.push(this.service.cars.subscribe(cars => {
      this.cars = cars as CarModel[];
      this.loadingService.hide();
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}



