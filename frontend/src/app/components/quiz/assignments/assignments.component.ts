import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  
  userRole : string = "";

  ngOnInit(){
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const userObject = JSON.parse(userJson);
      this.userRole = userObject.role;
  }
  }
}
