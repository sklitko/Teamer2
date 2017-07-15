import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { MdDialog } from '@angular/material';
import { FormProjectComponent } from '../form-project/form-project.component';
import { FormTaskComponent } from '../form-task/form-task.component';
import { AreYouSureComponent } from '../are-you-sure/are-you-sure.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projects: any;
  showSpinner: boolean = true;

  constructor(private firebaseService: FirebaseService,
    public dialog: MdDialog) { }

  ngOnInit() {
    this.firebaseService.getProjects().subscribe(projects => {
      //console.log(projects);
      this.projects = projects;
      this.showSpinner = false;
    });
  }
  openDialog() {
    this.dialog.open(FormProjectComponent);
  }

  openDialogTask(project) {
    this.dialog.open(FormTaskComponent, {
      data: project
    });
  }

  deleteProject(project) {
    let projectTitle: string;
    this.firebaseService.getProject(project).subscribe(project => {
      projectTitle = project.title;
    });


    let dialogRef = this.dialog.open(AreYouSureComponent,
      { data: projectTitle });
    dialogRef.afterClosed().subscribe(result => {
      result === 'true' ? this.firebaseService.deleteProject(project) : "";
    });
  }



}
