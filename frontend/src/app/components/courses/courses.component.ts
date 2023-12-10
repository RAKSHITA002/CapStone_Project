import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Courses } from 'src/app/models/courses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: Array<Courses> = [];
  filteredCourses: Array<Courses> = [];
  searchText: string = '';
  userRole : string = "";
  instructorName : string = "";

  constructor(private service: ApiService, private route: Router) {}

  ngOnInit() {
    this.getSomeData();

    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const userObject = JSON.parse(userJson);
      this.userRole = userObject.role;
      const name = userObject.name;
      this.instructorName = name.charAt(0).toUpperCase() + name.substring(1);
    } 
  }

  getSomeData() {
    this.service.getSomeData().subscribe(
      (data: Array<Courses>) => {
        this.courses = data;
        this.filteredCourses = data;
        console.log(this.courses);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  content(id: string) {
    this.route.navigate(['dashboard/content', id]);
    console.log(id);
  }

  myCourse(name : string){
    this.route.navigate(['instructor-dashboard/my-course', name]);
  }

  search(event: any) {
    const searchText = event.target.value;
    this.filteredCourses = this.courses.filter(course => 
      course.title.toLowerCase().startsWith(searchText.toLowerCase())
      || course.instructorName.toLowerCase().startsWith(searchText.toLowerCase())
    );
  }

  deleteCourse(id : string){
    this.service.deleteCourse(id).subscribe((res)=>{
      console.log(res);
    })
  }

}