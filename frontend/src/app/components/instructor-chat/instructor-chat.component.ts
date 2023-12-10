import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Chat } from 'src/app/models/chat'; 
import { Enrolled } from 'src/app/models/enrolled';

@Component({
  selector: 'app-instructor-chat',
  templateUrl: './instructor-chat.component.html',
  styleUrls: ['./instructor-chat.component.css']
})
export class InstructorChatComponent {

  @ViewChild('chatSection') chatSection!: ElementRef;
  @ViewChild('chatInput') chatInput!: ElementRef;

 senderId: string = '';
 receiverId: string = '';
 role: string = ''; 
 enrollData: Array<Enrolled> = []; 
 instructorName: Array<string> = []; 
 studentName: Array<string> = []; 
 studentId: Array<string> = []; 
 messages: Array<Chat> = []; 
 newChat = true;
 name : string = ""
 
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
     if (userJson !== null) { 
      const userObject = JSON.parse(userJson); 
      this.senderId = userObject.name; 
      console.log(this.senderId);
      this.role = userObject.role; 
    }

    this.service.getEnrolledByIntructorName(this.senderId).subscribe((data)=>{
      this.enrollData = data;
      for (let item of this.enrollData) {
         this.studentName.push(item.studentName);
         this.studentId.push(item.userId);
      }
    });

  }

  ngAfterViewInit(): void { this.scrollToBottom(); }

  scrollToBottom(): void { this.chatSection.nativeElement.scrollTo(0, 10000); }


  openChat(id: string, name : string): void {
    this.name = name;
    this.receiverId = id;
    this.newChat = true;
   

    this.service.getChatsById(this.senderId, this.receiverId).subscribe((res) => {
      if (res.length > 0) {
        this.newChat = false;
        this.messages = res;
        setTimeout(() => this.scrollToBottom(), 50);
      }
    });
  }

  sendMessage(msg: string): void {
    const MESSAGE: Chat = { senderId: this.senderId, receiverId: this.receiverId, content: msg, };

    this.service.createchat(MESSAGE).subscribe(() => {
      this.service.getChatsById(this.senderId, this.receiverId).subscribe((res) => {
        if (res.length > 0) {
          this.newChat = false;
          this.messages = res;
          setTimeout(() => this.scrollToBottom(), 50);
        }
      });
    });

    this.chatInput.nativeElement.value = '';
  }
}
