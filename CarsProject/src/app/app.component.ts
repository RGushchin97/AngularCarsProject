import { Component } from '@angular/core';
import { CarModel } from './models/car.model';
import { Color } from './models/color.model';

@Component({
  selector: 'app-root',
  templateUrl: '/app.component.html',
})

export class AppComponent {
  title = 'Cars';

  cars: Array<CarModel> = [
    {make: 'BMW', mileage: 300000.75, manufactureDate: new Date('1997-10-12'), color: Color.Black, forSale: true},
    {make: 'Lada', mileage: 3000123.25, manufactureDate: new Date('1973-02-22'), color: Color.White, forSale: false},
    {make: 'Lada', mileage: 1233003.5, manufactureDate: new Date('1978-02-22'), color: Color.Green, forSale: false},
    {make: 'Audi', mileage: 123112.995, manufactureDate: new Date('2003-05-12'), color: Color.Yellow, forSale: true},
    {make: 'BMW', mileage: 30232210.22, manufactureDate: new Date('1991-12-12'), color: Color.Black, forSale: true},
    {make: 'BMW', mileage: 302310.75, manufactureDate: new Date('1990-11-1'), color: Color.Yellow, forSale: true},
    {make: 'Lada', mileage: 3000123.25, manufactureDate: new Date('1973-6-25'), color: Color.Orange, forSale: false},
    {make: 'Lada', mileage: 5600623.265, manufactureDate: new Date('1970-7-8'), color: Color.Red, forSale: true},
    {make: 'BMW', mileage: 11302310.755, manufactureDate: new Date('2017-12-18'), color: Color.White, forSale: false},
    {make: 'BMW', mileage: 30231110.758, manufactureDate: new Date('2000-02-13'), color: Color.Black, forSale: true},
    {make: 'BMW', mileage: 3023210.759, manufactureDate: new Date('2005-1-01'), color: Color.Red, forSale: false},
  ];
  strFilter: string;
  ignoreCase = true;


  filterCars() {
    if (this.ignoreCase) {
      return this.cars.filter(this.filterIgnoreCase());
    } else {
      return this.cars.filter(this.filterSensitiveCase());
    }
  }

  private filterIgnoreCase() {
    return car => car.make.toLowerCase().includes(this.strFilter.toLowerCase());
  }

  private filterSensitiveCase() {
    return car => car.make.includes(this.strFilter);
  }
}
