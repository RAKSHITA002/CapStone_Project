import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Assignment } from 'src/app/models/assignment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createassignemnt',
  templateUrl: './createassignemnt.component.html',
  styleUrls: ['./createassignemnt.component.css']
})
export class CreateassignemntComponent {

  newCourse : FormGroup;

  constructor(private service : ApiService, private router : Router){
    this.newCourse = new FormGroup({
      'title' : new FormControl('',[Validators.required]),
      'content' : new FormControl('', [Validators.required]),
    })
}

createAssignment(){
  this.service.createAssignment(this.newCourse.value).subscribe((res)=>{
    console.log(res);
    this.router.navigate(["/instructor-dashboard/assignments"]);
  })
}
}
