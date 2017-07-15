import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  id: any;
  task_id: any;
  project: any;
  task: any;
  showSpinner: boolean = true;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.task_id = this.route.snapshot.params['task_id'];
    
    this.firebaseService.getProject(this.id).subscribe(project => {
      this.project = project;
    })

    this.firebaseService.getTask(this.id, this.task_id).subscribe(task => {
      this.task = task;
      this.showSpinner = false;
    })
  }

}
