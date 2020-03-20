import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // this import is needed to implement 2-way binding
import { HttpClientModule } from '@angular/common/http'; // needed for backend communication
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
