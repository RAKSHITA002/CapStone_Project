import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Courses } from 'src/app/models/courses';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-couresadd',
  templateUrl: './couresadd.component.html',
  styleUrls: ['./couresadd.component.css']
})
export class CouresaddComponent {

  newCourse : FormGroup;

  constructor(private service : ApiService, private toastr: ToastrService){
    this.newCourse = new FormGroup({
      'title' : new FormControl('',[Validators.required]),
      'image' : new FormControl('', [Validators.required]),
      'instructorName' : new FormControl('', [Validators.required]),
      'heading' : new FormControl('', [Validators.required]),
      'description' : new FormControl('', [Validators.required]),
      'video':new FormControl('', [Validators.required])
  })
  }


  createCourse(){
    console.log(this.newCourse.value);
    this.service.addCourse(this.newCourse.value).subscribe((data)=>{
      console.log(data);
    })
    this.toastr.success("", 'Success')
  }


}
/* 
export class CouresaddComponent {
  newCourse: FormGroup;
  selectedFile!: File;

  constructor(private service: ApiService) {
    this.newCourse = new FormGroup({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      instructorName: new FormControl('', [Validators.required]),
      heading: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      video: new FormControl('', [Validators.required])
    });
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  createCourse() {
    const formData = new FormData();
    formData.append('image', this.selectedFile);
    formData.append('title', this.newCourse.get('title')?.value ?? '');
formData.append('instructorName', this.newCourse.get('instructorName')?.value ?? '');
formData.append('heading', this.newCourse.get('heading')?.value ?? '');
formData.append('description', this.newCourse.get('description')?.value ?? '');
formData.append('video', this.newCourse.get('video')?.value ?? '');

    this.service.addCourse(formData).subscribe(data => {
      console.log(data);
    });
  }
} */