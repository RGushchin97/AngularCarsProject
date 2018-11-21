import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatRippleModule} from '@angular/material';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CarMarkFilterPipe } from './car.mark.filter.pipe';

@NgModule({
  declarations: [
    AppComponent, CarMarkFilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatRadioModule,
    MatInputModule, MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
