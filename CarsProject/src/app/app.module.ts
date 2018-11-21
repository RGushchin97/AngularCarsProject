import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule,
  MatRippleModule, MatSelectModule
} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CarMakeFilterPipe } from './cars/car-make-filter.pipe';
import { CarsComponent } from './cars/cars.component';
import {RouterModule, Routes} from "@angular/router";

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
    BrowserModule, FormsModule, BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatRadioModule,
    MatInputModule, MatRippleModule, MatToolbarModule, MatMenuModule, MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
