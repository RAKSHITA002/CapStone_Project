import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Enrolled } from 'src/app/models/enrolled';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  course !: Array<Enrolled>;
  instructorName : string = "";
  id : string = "";
  enrolled !: Enrolled;
  constructor(private service : ApiService){

  }

  ngOnInit(){
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const userObject = JSON.parse(userJson);
      const name = userObject.name;
      this.instructorName = name.charAt(0).toUpperCase() + name.substring(1);
    } 

    this.getCourse();

     
  }

  getCourse(){
    this.service.getEnrolledByIntructorName(this.instructorName).subscribe((res)=>{
      console.log(res);
      this.course = res;

      for(let item of this.course){
        this.enrolled = {
          id : item.id,
          userId : item.userId,
          image : item.image,
          title : item.title,
          status : "Enrolled",
          instructorName : item.instructorName
        }

        console.log(this.enrolled);
      }
      
    }); 
  }

  status(){
      this.service.updateEnrolled(this.enrolled.id, this.enrolled).subscribe((res)=>{
      console.log(res);
    })
  }

}
