import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  userRole : string = "";
  ngOnInit(){
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const userObject = JSON.parse(userJson);
      this.userRole = userObject.role;
  }
  }
}
