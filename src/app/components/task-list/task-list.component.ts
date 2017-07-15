import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-tasklist',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: any;
  id: any;
  link: any;

  @Input()
  project_id: string;

  constructor(
    private firebaseService: FirebaseService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.id === this.project_id ? this.link = '' : this.link = this.project_id + '/';

    this.firebaseService.getTasks(this.project_id).subscribe(tasks => {
      this.tasks = tasks;
      //console.log(tasks);
    })
  }

  

}
