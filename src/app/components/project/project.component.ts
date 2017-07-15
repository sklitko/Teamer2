import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MdDialog } from '@angular/material';
import { FormTaskComponent } from '../form-task/form-task.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  id: any;
  project: any;
  showSpinner: boolean = true;
  
  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getProject(this.id).subscribe(project => {
      this.project = project;
      this.showSpinner = false;
    });
    
  }

  openDialog() {
    this.dialog.open(FormTaskComponent);
  }

}
