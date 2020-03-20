import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:User[];
  
  ngOnInit() {
    this.usersvc.list().subscribe(
      res => {
        this.users = res;
        console.log("Users: ", res);
      },
      err => {
        console.error("User service list() failed: ", err);
      }
    );
  }

  constructor(
    private usersvc:UserService
  ) {}
  
  title = 'Angular 9';
  name:string = "no name yet";
  color:string = "black";
  isHidden:boolean = false;
  yes:boolean = true;
  inputValue:string;
  heheheProp:string = "normal";

  names:string[] = [
    "Bob", "Larry", "Little Joe", "Junior", "Laura"
  ]

  check():void {
    if (this.inputValue === "Yes") {
      this.yes = false;
    } 
  }

  hehehe():void {
    this.heheheProp = (this.heheheProp == "normal") ? "italic" : "normal";
  }

  setName():void {
    if (this.name == "no name yet") this.name = "Parker";
    this.name = (this.name == "Parker") ? "Parsley 冬" : "Parker";
  }
  toggleColor():void {
    this.color = (this.color == "black") ? "violet" : "black";
  }
  flipHidden():void {
    this.isHidden = !this.isHidden;
  }
}
