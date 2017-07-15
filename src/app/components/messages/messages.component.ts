import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: any;
  text: string;
  id: any;
  task_id: any;
  

  //@Input()
  //task_id: string;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.task_id = this.route.snapshot.params['task_id'];

    console.log(this.task_id);
    this.firebaseService.getMessages(this.task_id).subscribe(messages => {
      this.messages = messages;
      
    })
  }

  AddMessage() {
    let message = {
      text: this.text
    }
    
    this.firebaseService.addMessage(message);
  }

}
