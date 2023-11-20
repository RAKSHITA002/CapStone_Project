import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userData: FormGroup;
  constructor(private service : ApiService){
    this.userData = new FormGroup({
      name: new FormControl('', [
       Validators.required,
       Validators.maxLength(10),
       Validators.minLength(3),
     ]),
      email: new FormControl('', [
       Validators.required,
       Validators.maxLength(30),
       Validators.minLength(3),
       Validators.email
     ]),
      password: new FormControl('', [
       Validators.required,
       Validators.maxLength(10),
       Validators.minLength(3),
     ]),
     role: new FormControl('', [
      Validators.required,
    ]),
   });
  }

  Register(){
    this.service.registerUser(this.userData.value).subscribe((data : any) =>{
      localStorage.setItem('user', JSON.stringify(data));
    })
  }

}
