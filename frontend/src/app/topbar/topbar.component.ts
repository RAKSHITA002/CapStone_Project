import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {


  name : string = "";
  role : string = "";

  ngOnInit(){
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const userObject = JSON.parse(userJson);
      this.role = userObject.role;
     this.name = userObject.name;
    } 
  }
  constructor(private route : Router){

  }
logout(){
  localStorage.removeItem('user');
  this.route.navigate(["/login"]);
}
}
