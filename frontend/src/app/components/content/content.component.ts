import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Courses } from 'src/app/models/courses';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Enrolled } from 'src/app/models/enrolled';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  courseId : string = "";
  userId : string = "";
  enrollData : any;
  course : Courses |  undefined;
  video2 : string = "";
  videoUrl : SafeResourceUrl | undefined;

  constructor(private service : ApiService, private route : ActivatedRoute,  private sanitizer: DomSanitizer){
    
  }

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('id')?.toString() || '';
  
    this.service.getCourseById(this.courseId).subscribe(data => {
      this.course = data;
      this.video2 = this.course.video2;
      console.log(this.course);
      console.log(this.course.video2);
      console.log(this.course.instructorName);
  
      this.enrollData = {
        id: "",
        userId: this.userId,
        image: this.course?.image,
        title: this.course?.title,
        instructorName : this.course.instructorName,
        status : "Yet to Approve"
      };

      console.log(this.enrollData);
    });
  

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video2);

    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const userObject = JSON.parse(userJson);
      this.userId = userObject.id;
      console.log(this.userId);
    } else {
      console.log('User not found in localStorage');
    }
  }

  
  enroll(){
    alert("Added to My Learning");
    this.service.enrollUser(this.enrollData).subscribe((res)=>{
      console.log(res);
    });
  }

}
