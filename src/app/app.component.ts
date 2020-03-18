import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 9';
  name:string = "no name yet";
  color:string = "black";
  isHidden:boolean = false;

  setName():void {
    this.name = "Parsley 冬";
  }
  setColor():void {
    this.color = (this.color == "black") ? "violet" : "black";
  }
  flipHidden():void {
    this.isHidden = !this.isHidden;
  }
}
