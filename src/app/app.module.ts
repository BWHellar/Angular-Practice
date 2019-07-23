import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PersonInputComponent } from './persons/person-input.component';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
