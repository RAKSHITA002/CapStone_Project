import { Component } from '@angular/core';
import { Enrolled } from 'src/app/models/enrolled';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.css']
})
export class EnrolledComponent {
userId : string = "";
enrollData : Array<Enrolled> = [];

  constructor(private service : ApiService, private toastr : ToastrService){
    
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const userObject = JSON.parse(userJson);
      this.userId = userObject.id;
      console.log(this.userId);
    } else {
      console.log('User not found in localStorage');
    }

  }

ngOnInit(){
  this.service.getEnrolledUserById(this.userId).subscribe((data)=>{
    console.log(data);
    this.enrollData = data;
  })
}

remove(id : string){
  this.toastr.success('Leaved', 'Success');
 this.service.deleteEnrolled(id).subscribe((data)=>{
  console.log(data);

  
 })
}

}
