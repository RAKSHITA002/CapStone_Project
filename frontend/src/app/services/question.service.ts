import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http : HttpClient) { }

  //get quiz data student
  getQuestionJson(){
    return this.http.get<any>("https://localhost:7291/api/Question");
  }

  //create quiz instructor - yet to implement

  createQuiz(quiz : any): Observable<any>{
    return this.http.post<any>(``, quiz);
  }

  //edit quiz

  
}
