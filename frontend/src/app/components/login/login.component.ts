import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userData: FormGroup;
  userRole : string = "";

  constructor(private service : ApiService, private router : Router){
    this.userData = new FormGroup({
       email: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3),
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3)
      ]),
    });
  }

  LogIn(){
     this.service.loginUser(this.userData.value).subscribe((data : any)=>{
      localStorage.setItem('user', JSON.stringify(data)); 

      const userJson = localStorage.getItem('user');
      if (userJson !== null) {
      const userObject = JSON.parse(userJson);
      this.userRole = userObject.role;
      console.log(this.userRole);
      } else {
      console.log('User not found in localStorage');
      }


      if(this.userRole === "student")
      this.router.navigate(["/dashboard"]);

      else if(this.userRole === "instructor")
      this.router.navigate(["/instructor-dashboard"]);

      else if(this.userRole === "admin")
      this.router.navigate(["/admin-dashboard"]);
     })
  }
  
}
