import {Injectable} from '@angular/core';
import {CarModel} from '../models/car.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private headers = new HttpHeaders();
  cars: Observable<CarModel[]>;
  private url = '/api/cars';

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
    this.cars = this.getCars();
  }

  getCars(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this.url, {
      headers: this.headers
    });
  }


  createCar(car: CarModel): Observable<CarModel> {
    return this.http.post<CarModel>(this.url, car, { headers: this.headers });
  }

  deleteCar(car: CarModel): Observable<void> {
    const urlParams = new HttpParams().set('id', car.id.toString());
    return this.http.delete<void>(this.url, { params: urlParams });
  }

}
