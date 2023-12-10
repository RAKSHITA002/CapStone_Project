import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Courses } from 'src/app/models/courses';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {

  instructorName : string = "";
  myCourse : any
  course !: Courses ;
  courseId : string = "";
  constructor(private service : ApiService, private route : ActivatedRoute, private router : Router){

  }

  ngOnInit(){
    this.instructorName = this.route.snapshot.paramMap.get('id')?.toString() || '';

    this.service.getCourseByName(this.instructorName).subscribe((data)=>{
      console.log(data);
      this.myCourse = data;
    
    })


  }

  edit(id : string){
     this.courseId  = id;
     this.router.navigate(['/instructor-dashboard/edit-course',id]);
    }
  

  deleteCourse(id : string){
    this.courseId = id;
    this.service.deleteCourse(this.courseId).subscribe((res)=>{});
  }
  
}
