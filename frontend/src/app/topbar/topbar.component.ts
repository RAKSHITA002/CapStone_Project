import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  constructor(private route : Router){

  }
logout(){
  localStorage.removeItem('user');
  this.route.navigate(["/login"]);
}
}
