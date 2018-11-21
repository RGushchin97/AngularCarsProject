import {Color} from './color.model';

export class CarModel {
  id: number;
  make: string;
  mileage: number;
  manufactureDate: Date;
  color: Color;
  forSale: boolean;

  constructor(id: number, make: string, mileage: number, manufactureDate: Date, color: Color, forSale: boolean) {
    this.id = id;
    this.make = make;
    this.mileage = mileage;
    this.manufactureDate = manufactureDate;
    this.color = color;
    this.forSale = forSale;
  }
}
