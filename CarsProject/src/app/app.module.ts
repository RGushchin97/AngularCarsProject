import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule,
  MatRadioModule,
  MatRippleModule, MatSelectModule, MatTableModule
} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';



import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarMakeFilterPipe } from './cars/filters/car-make-filter.pipe';
import { CarsComponent } from './cars/components/cars/cars.component';
import {RouterModule, Routes} from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AddCarComponent } from './cars/components/add-car/add-car.component';

const appRoutes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars/create', component: AddCarComponent }
];

@NgModule({
  declarations: [
    AppComponent, CarMakeFilterPipe, CarsComponent, AddCarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
