import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule,
  MatRadioModule,
  MatRippleModule, MatSelectModule
} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';



import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarMakeFilterPipe } from './cars/car-make-filter.pipe';
import { CarsComponent } from './cars/cars.component';
import {RouterModule, Routes} from "@angular/router";
import {MatDatepickerModule} from "@angular/material/datepicker";

const appRoutes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, CarMakeFilterPipe, CarsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatRadioModule,
    MatInputModule, MatRippleModule, MatToolbarModule, MatMenuModule, MatSelectModule, MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
