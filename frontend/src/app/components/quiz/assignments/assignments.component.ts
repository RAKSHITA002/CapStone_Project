import { Component } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {

  constructor(private service : ApiService, private route : Router){}
  
  userRole : string = "";
  assignmentData : Array<Assignment> = [];

  ngOnInit(){
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const userObject = JSON.parse(userJson);
      this.userRole = userObject.role;
  }

  this.service.getAssignment().subscribe((res)=>{
    this.assignmentData = res;
  })

  }
create(){
  this.route.navigate(["/instructor-dashboard/createassignment"])
}
}
