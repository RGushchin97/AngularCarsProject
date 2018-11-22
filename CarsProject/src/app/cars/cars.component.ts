import {CarModel} from "./car.model";
import {Color} from "./color.model";
import {Component, OnInit, TemplateRef, ViewChild} from "@angular/core";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  title = "Cars";
  cars: Array<CarModel>;
  newCar: CarModel = null;
  isNewRecord: boolean;
  today = new Date(Date.now());
  colors = Color;
  private formBuilder = new FormBuilder();
  private addingForm: any;

  constructor() {
    this.cars = [
      {id: 1, make: 'BMW', mileage: 300000.75, manufactureDate: new Date('1997-10-12'), color: Color.Black, forSale: true},
      {id: 2, make: 'Lada', mileage: 3000123.25, manufactureDate: new Date('1973-02-22'), color: Color.White, forSale: false},
      {id: 3, make: 'Lada', mileage: 1233003.5, manufactureDate: new Date('1978-02-22'), color: Color.Green, forSale: false},
      {id: 4, make: 'Audi', mileage: 123112.995, manufactureDate: new Date('2003-05-12'), color: Color.Yellow, forSale: true},
      {id: 5, make: 'BMW', mileage: 30232210.22, manufactureDate: new Date('1991-12-12'), color: Color.Black, forSale: true},
      {id: 6, make: 'BMW', mileage: 302310.75, manufactureDate: new Date('1990-11-1'), color: Color.Yellow, forSale: true},
      {id: 6, make: 'Lada', mileage: 3000123.25, manufactureDate: new Date('1973-6-25'), color: Color.Orange, forSale: false},
      {id: 7, make: 'Lada', mileage: 5600623.265, manufactureDate: new Date('1970-7-8'), color: Color.Red, forSale: true},
      {id: 8, make: 'BMW', mileage: 11302310.755, manufactureDate: new Date('2017-12-18'), color: Color.White, forSale: false},
      {id: 9, make: 'BMW', mileage: 30231110.758, manufactureDate: new Date('2000-02-13'), color: Color.Black, forSale: true},
      {id: 10, make: 'BMW', mileage: 3023210.759, manufactureDate: new Date('2005-1-01'), color: Color.Red, forSale: false},
    ];
  }

  ngOnInit() {
  }

  deleteCar(car: CarModel) {
    if (confirm('Are you sure you want to delete this car?')) {
      const index: number = this.cars.indexOf(car);
      if (index !== -1) {
        this.cars.splice(index, 1);
        this.cars = this.cars.filter(c => c !== car);
      }
    }
  }

  addCar() {
    this.newCar = new CarModel(null,null, null, null, null, false);
    this.cars.push(this.newCar);
    this.isNewRecord = true;
  }

  loadTemplate(car: CarModel) {
    if (this.newCar && this.newCar.id == car.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveCar() {
    if (this.isNewRecord) {
      this.newCar.id = this.cars[this.cars.length-1].id + 1;
      this.cars[this.cars.length-1] = this.newCar;
      this.isNewRecord = false;
      this.newCar = null;
    }
  }

  cancelCar() {
    if (this.isNewRecord) {
      this.cars.pop();
      this.isNewRecord = false;
    }
    this.newCar = null;
  }

  validate() {
    this.addingForm = this.formBuilder.group( {
      carMake: new FormControl('', Validators.required),
      mileage: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(0)
        ])),
      manufactureDate: new FormControl('manufactureDate', Validators.required),
      color: new FormControl('', Validators.required)
      });
  }
}
