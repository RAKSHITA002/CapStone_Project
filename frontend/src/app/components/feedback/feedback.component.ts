import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Feedback } from 'src/app/models/feedback';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  userId : string = "";
  feedback !: Feedback 
  feedbackData : FormGroup;
   userRole : string = "";
   myData: Array<Feedback>= [];

  constructor(private service : ApiService, private toastr: ToastrService){

   const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const userObject = JSON.parse(userJson);
      this.userId = userObject.id;
      this.userRole = userObject.role
      console.log(this.userId);
    } else {
      console.log('User not found in localStorage');
    }


    this.feedbackData = new FormGroup({
      review: new FormControl('', [
        Validators.required,
      ]),
      content: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5),
      ]),
    });
  }

  ngOnInit(){
    this.feedback = {
      id : "",
      userId : this.userId,
      review : "",
      content : ""
    }

  this.service.getFeedback().subscribe((res)=>{
    this.myData = res;
  })
  }

  
  giveFeedback(){

  this.feedback.review = this.feedbackData.value.review;
  this.feedback.content = this.feedbackData.value.content;

    this.service.postFeedback(this.feedback).subscribe((res)=>{
      console.log(res);
    });
  }

  submit(){
    this.toastr.success('You have successfully submited the feedback', 'Success')
    // alert("Success");
  }

}
