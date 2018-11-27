import {Injectable} from '@angular/core';
import {CarModel} from '../models/car.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private headers = new HttpHeaders();
  private cars: Array<CarModel> = [];
  private url = 'http://localhost:8080/api/cars';

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  getCars() {
    return this.http.get<CarModel[]>(this.url, {
      headers: this.headers
    });
  }

  createCar(car: CarModel) {
    this.http.post<CarModel>(this.url, car, { headers: this.headers }).subscribe();
    this.getCars();
  }

  deleteCar(car: CarModel) {
    const urlParams = new HttpParams().set('id', car.id.toString());
    console.log(car.id);
    this.http.delete(this.url, { params: urlParams }).subscribe();
    this.getCars();
  }
}
