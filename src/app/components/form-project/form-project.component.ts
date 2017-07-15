import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css']
})
export class FormProjectComponent implements OnInit {

  title: string;

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }

  onAddSubmit() {
    //console.log(this.title);
    let project = {
      title: this.title
    }
    this.firebaseService.addProject(project);
  }

}

  
