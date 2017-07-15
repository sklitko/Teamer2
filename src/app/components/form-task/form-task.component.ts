import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {

  title: string;

  constructor(
    private firebaseService: FirebaseService,
    @Inject(MD_DIALOG_DATA) private data: any
  ) { }

  ngOnInit() {
  }

  onAddSubmit() {
    let task = {
      title: this.title
    }
    this.firebaseService.addTask(this.data, task);
  }

}
