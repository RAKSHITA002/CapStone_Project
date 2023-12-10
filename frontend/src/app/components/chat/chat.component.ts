/* import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { Chat } from 'src/app/models/chat';
import { Enrolled } from 'src/app/models/enrolled';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  @ViewChild('chatSection') chatSection!: ElementRef;
  @ViewChild('chatInput') chatInput!: ElementRef;

  senderId: string = "";
  receiverId: string = "";
  role: string = "";
  enrollData: Array<Enrolled> = [];
  instructorName: Array<string> = [];
  studentId: Array<string> = [];
  chat: Chat = {
    senderId: "",
    receiverId: '',
    content: ""
  };

  constructor(private service: ApiService) {

  }

  ngOnInit() {
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const userObject = JSON.parse(userJson);
      this.senderId = userObject.id;
      this.role = userObject.role;
    }

    this.service.getEnrolledUserById(this.senderId).subscribe((data) => {
      this.enrollData = data;
      console.log(this.enrollData)
      for (let item of this.enrollData) {
        this.instructorName.push(item.instructorName);
      }
      for (let item of this.enrollData) {
        this.studentId.push(item.userId);
      }

    })
  }

  sendChat(id : string){
    this.receiverId = id;
    this.chat = {
      senderId : this.senderId,
      receiverId : this.receiverId,
      content : ""
    };

    this.service.createchat(this.chat).subscribe((res)=>{});

  }

  showChat(id : string){
    this.receiverId = id;
    this.service.getChatsById(this.senderId, this.receiverId).subscribe((res)=>{
       console.log(res);
    })
  }


}

 */

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Chat } from 'src/app/models/chat';
import { Enrolled } from 'src/app/models/enrolled';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, AfterViewInit {

  @ViewChild('chatSection') chatSection!: ElementRef;
  @ViewChild('chatInput') chatInput!: ElementRef;

  senderId: string = '';
  receiverId: string = '';
  role: string = '';
  enrollData: Array<Enrolled> = [];
  status : Array<string> = [];
  myStatus : string = "";
  instructorName: Array<string> = [];
  studentName: Array<string> = [];
  studentId: Array<string> = [];
  messages: Array<Chat> = [];
  newChat = true;
  

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const userObject = JSON.parse(userJson);
      this.senderId = userObject.id;
      this.role = userObject.role;
    }

    this.service.getEnrolledUserById(this.senderId).subscribe((data) => {
      this.enrollData = data;
      console.log(this.enrollData);
      for (let item of this.enrollData) {
        this.instructorName.push(item.instructorName);
      }
    });

    
    if (this.studentId[0] !== this.senderId) {
      this.receiverId = this.studentId[0];
      this.service.getChatsById(this.senderId, this.receiverId).subscribe((res) => {
        if (res.length > 0) {
          this.newChat = false;
          this.messages = res;
          setTimeout(() => this.scrollToBottom(), 50);
        }
      });
    }
  }

  ngAfterViewInit(): void { this.scrollToBottom(); }

  scrollToBottom(): void { this.chatSection.nativeElement.scrollTo(0, 10000); }

  
  openChat(id: string): void {
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
