import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // this import is needed to implement 2-way binding
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
