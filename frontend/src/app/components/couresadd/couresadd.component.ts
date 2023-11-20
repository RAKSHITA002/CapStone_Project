import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Courses } from 'src/app/models/courses';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-couresadd',
  templateUrl: './couresadd.component.html',
  styleUrls: ['./couresadd.component.css']
})
export class CouresaddComponent {

  newCourse : FormGroup;

  constructor(private service : ApiService){
    this.newCourse = new FormGroup({
      'title' : new FormControl('',[Validators.required]),
      'image' : new FormControl('', [Validators.required]),
      'instructorName' : new FormControl('', [Validators.required]),
      'heading' : new FormControl('', [Validators.required]),
      'video' : new FormControl('', [Validators.required])
  })
  }


  createCourse(){
    console.log(this.newCourse.value);
    this.service.addCourse(this.newCourse.value).subscribe((data)=>{
      console.log(data);
    })
  }


}
