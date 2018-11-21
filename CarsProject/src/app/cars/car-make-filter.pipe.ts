import { Pipe, PipeTransform } from '@angular/core';
import {CarModel} from "./car.model";

@Pipe({
  name: 'markFilter'
})

export class CarMakeFilterPipe implements PipeTransform {
  private make: string;
  transform(cars: CarModel[], searchText: string, ignoreCase: boolean): any[] {
    if(!cars) return [];
    if(!searchText) return cars;

    return cars.filter( car => {
      this.make = car.make;
      if(ignoreCase) {
        searchText = searchText.toLowerCase();
        this.make = this.make.toLowerCase();
      }
      return this.make.includes(searchText);
    });
  }
}
