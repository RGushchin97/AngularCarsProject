import {Color} from './color.model';

export class CarModel {

  constructor(public id: number,
              public make: string,
              public mileage: number,
              public manufactureDate: Date,
              public color: Color,
              public forSale: boolean) {

  }

}
