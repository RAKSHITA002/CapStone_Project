import { Component } from '@angular/core';

@Component({
  selector: 'app-quizlist',
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent {
  userRole : string = "";

  ngOnInit(){
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const userObject = JSON.parse(userJson);
      this.userRole = userObject.role;
  }
  }
}
