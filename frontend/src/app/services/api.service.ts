import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courses } from '../models/courses';
import { Users } from '../models/users';
import { Enrolled } from '../models/enrolled';
import { Feedback } from '../models/feedback';
import { Assignment } from '../models/assignment';
import { Chat } from '../models/chat';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }


  //course
  getSomeData(): Observable<Array<Courses>>{
    return this.http.get<Array<Courses>>(`https://localhost:7291/api/Courses`);   
  }

  getCourseById(id : string) : Observable<Courses>{
    return this.http.get<Courses>(`https://localhost:7291/api/Courses/${id}`)
  }

  //for instructor
  getCourseByName(name : string) : Observable<Courses>{
    return this.http.get<Courses>(`https://localhost:7291/api/Courses/name?name=${name}`);
  }

  editCourse(id : string, course : Courses) : Observable<Courses>{
    return this.http.put<Courses>(`https://localhost:7291/api/Courses/${id}`,course);
  }

  deleteCourse(id : string) : Observable<Courses>{
    
    return this.http.delete<Courses>(`https://localhost:7291/api/Courses/${id}`);
    /* console.log(`https://localhost:7291/api/Courses/${id}`); */
    
  }

  //for admin or instructor
  addCourse(course : Courses) : Observable<Courses>{
    return this.http.post<Courses>(`https://localhost:7291/api/Courses`, course);
  }

  /* addCourse(newCourse: FormData) {
    return this.http.post(`https://localhost:7291/api/Courses`, newCourse);
  } */



  //login
  registerUser(user : Users) : Observable<Users>{
         return this.http.post<Users>(`https://localhost:7291/api/Users/register`, user);
  }

  loginUser(user : any) : Observable<any>{
    return this.http.post<any>(`https://localhost:7291/api/Users/login`, user);
  }

  //enrolled
  enrollUser(user : Enrolled) : Observable<Enrolled>{
    return this.http.post<Enrolled>(`https://localhost:7291/api/Enrolled`, user);
  }

  getEnrolledUserById(userId : string) : Observable<Array<Enrolled>>{
    return this.http.get<Array<Enrolled>>(`https://localhost:7291/api/Enrolled/${userId}`)
  }

  getEnrolledByIntructorName(name : string) : Observable<Array<Enrolled>>{
    return this.http.get<Array<Enrolled>>(`https://localhost:7291/api/Enrolled/name?name=${name}`)
  }

  updateEnrolled(id : string, user : Enrolled) : Observable<Enrolled>{
   return this.http.put<Enrolled>(`https://localhost:7291/api/Enrolled/${id}`, user);
  }

  deleteEnrolled(id : string) : Observable<Enrolled>{
   return this.http.delete<Enrolled>(`https://localhost:7291/api/Enrolled/${id}`);
  }

  //feedback

  postFeedback(feedback : Feedback) : Observable<Feedback>{
     return this.http.post<Feedback>(`https://localhost:7291/api/Feedback`,feedback);
  }

  //not used yet for admin
  getFeedback() : Observable<Array<Feedback>>{
    return this.http.get<Array<Feedback>>(`https://localhost:7291/api/Feedback`)
  }

  //assignemnt

  getAssignment(): Observable<Array<Assignment>>{
    return this.http.get<Array<Assignment>>(`https://localhost:7291/api/Assignment`)
  }

  createAssignment(assignment : Assignment) : Observable<Assignment>{
    return this.http.post<Assignment>(`https://localhost:7291/api/Assignment`, assignment)
  }

  //chat

  createchat(chat : Chat) : Observable<Chat>{
    return this.http.post<Chat>(`https://localhost:7291/api/Chat`,chat);
  }

  getChatsById(senderId: string, receiverId: string): Observable<Chat[]>{
    return this.http.get<Chat[]>(`https://localhost:7291/api/Chat/${senderId}/${receiverId}`)
  }
}
