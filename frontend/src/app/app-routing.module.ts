import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseslistComponent } from './components/courseslist/courseslist.component';
import { CourseseditComponent } from './components/coursesedit/coursesedit.component';
import { CouresaddComponent } from './components/couresadd/couresadd.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EnrolledComponent } from './components/enrolled/enrolled.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { StudentsComponent } from './components/students/students.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { QuizComponent } from './components/quiz/quiz/quiz.component';
import { WelcomeComponent } from './components/quiz/welcome/welcome.component';
import { QuestionComponent } from './components/quiz/question/question.component';
import { HomeComponent } from './home/home/home.component';
import { AssignmentsComponent } from './components/quiz/assignments/assignments.component';
import { QuizlistComponent } from './components/quiz/quizlist/quizlist.component';
import { ChatComponent } from './components/chat/chat.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SupportStaffComponent } from './components/support-staff/support-staff.component';
import { AdminGuard } from './admin-dashboard/admin.guard';
import { StudentGuard } from './dashboard/student.guard';
import { InstructorGuard } from './instructor-dashboard/instructor.guard';
import { CreateassignemntComponent } from './components/quiz/createassignemnt/createassignemnt.component';
import { InstructorChatComponent } from './components/instructor-chat/instructor-chat.component';
const routes: Routes = [


  {
    path : "",
    component : HomeComponent
  },

  {
    path : "login",
    component : LoginComponent

  },
  {
    path : "register",
    component : RegisterComponent
  },

  {
    path : "admin-dashboard",
    component : AdminDashboardComponent,
    canActivate:[AdminGuard],

    children : [
      {
        path : "feedback",
        component : FeedbackComponent
      },
      {
        path : "courses",
        component : CoursesComponent
      },
      {
        path : "support-staff",
        component : SupportStaffComponent
      }
    ]
  },

  {
    path : "instructor-dashboard",
    component : InstructorDashboardComponent,
    canActivate : [InstructorGuard],

    children : [
      {
      path : "add-course",
      component : CouresaddComponent
      },
      {
        path : "courses",
        component :CoursesComponent
      },
      {
        path : "my-course/:id",
        component : MyCoursesComponent
      },
      {
        path : "students",
        component : StudentsComponent
      },
      {
        path : "edit-course/:id",
        component : EditCourseComponent
      },
      {
        path : "quiz",
        component : QuizComponent
      },
      {
        path : "chat",
        component : InstructorChatComponent
      },
      {
           path : "reports",
           component : ReportsComponent
      },
      {
        path : "quizlist",
        component : QuizlistComponent
      },
      {
        path : "assignments",
        component : AssignmentsComponent
      },{
        path :"createassignment",
        component : CreateassignemntComponent
      }
    ]
  },

  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate:[StudentGuard],

    children : [
      {
        path : "courses",
        component : CoursesComponent,

      },
      {
        path : "enrolled",
        component : EnrolledComponent
      },

      {
        path : "content/:id",
        component : ContentComponent
        },
        {
          path : "feedback",
          component : FeedbackComponent
        },
        {
          path : "quiz",
          component : QuizComponent
        },
        {
          path : "welcome",
          component : WelcomeComponent
        },
        {
          path : "question",
          component : QuestionComponent
        },
        {
          path : "assignments",
          component : AssignmentsComponent
        },
        {
          path : "quizlist",
          component : QuizlistComponent
        },
        {
          path : "chat",
          component : ChatComponent
        }

    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
