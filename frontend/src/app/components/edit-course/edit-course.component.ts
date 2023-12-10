import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Courses } from 'src/app/models/courses';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {

newCourse : FormGroup;
courseId : string = "";
course !: Courses;

constructor(private service : ApiService, private route : ActivatedRoute, private router : Router){
  this.newCourse = new FormGroup({
    'title' : new FormControl('',[Validators.required]),
    'image' : new FormControl('', [Validators.required]),
    'instructorName' : new FormControl('', [Validators.required]),
    'heading' : new FormControl('', [Validators.required]),
    'video' : new FormControl('', [Validators.required])
})
}

ngOnInit(){
  this.courseId = this.route.snapshot.paramMap.get('id')?.toString() || '';
  this.service.getCourseById(this.courseId).subscribe(data => {
    this.course = data;
    this.newCourse.setValue({
      title: this.course.title,
      image: this.course.image,
      instructorName: this.course.instructorName,
      heading: this.course.heading,
      video: this.course.video1
    });
  });

  console.log(this.courseId);
}

editCourse(){
  const courseData: Courses = {
    id : this.courseId,
    title: this.newCourse.value.title,
    image : this.newCourse.value.image,
    instructorName : this.newCourse.value.instructorName,
    heading : this.newCourse.value.heading,
    video1 : this.newCourse.value.video,
    video2 : "",
    video3 : "",
    ratings : 4
  };

  this.service.editCourse(this.courseId, courseData).subscribe((res)=>{
    console.log(res);
 this.router.navigate(["instructor-dashboard/courses"]);
  })
}

  
}
