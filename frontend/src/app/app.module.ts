import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseslistComponent } from './components/courseslist/courseslist.component';
import { CourseseditComponent } from './components/coursesedit/coursesedit.component';
import { CouresaddComponent } from './components/couresadd/couresadd.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { EnrolledComponent } from './components/enrolled/enrolled.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { StudentsComponent } from './components/students/students.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { QuizComponent } from './components/quiz/quiz/quiz.component';
import { WelcomeComponent } from './components/quiz/welcome/welcome.component';
import { QuestionComponent } from './components/quiz/question/question.component';
import { ChangeBgDirective } from './change-bg.directive';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { AssignmentsComponent } from './components/quiz/assignments/assignments.component';
import { QuizlistComponent } from './components/quiz/quizlist/quizlist.component';
import { ChatComponent } from './components/chat/chat.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SupportStaffComponent } from './components/support-staff/support-staff.component';
import { CreateassignemntComponent } from './components/quiz/createassignemnt/createassignemnt.component';
import { ToastrModule } from 'ngx-toastr';
import { InstructorChatComponent } from './components/instructor-chat/instructor-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    SigninComponent,
    DashboardComponent,
    CoursesComponent,
    CourseslistComponent,
    CourseseditComponent,
    CouresaddComponent,
    ContentComponent,
    LoginComponent,
    RegisterComponent,
    EnrolledComponent,
    FeedbackComponent,
    AdminDashboardComponent,
    InstructorDashboardComponent,
    MyCoursesComponent,
    StudentsComponent,
    EditCourseComponent,
    QuizComponent,
    WelcomeComponent,
    QuestionComponent,
    ChangeBgDirective,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AssignmentsComponent,
    QuizlistComponent,
    ChatComponent,
    ReportsComponent,
    SupportStaffComponent,
    CreateassignemntComponent,
    InstructorChatComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    HttpClientModule,
    CarouselModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule ,
    ToastrModule.forRoot({})
  ],
  exports:[
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    HttpClientModule,
    CarouselModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
