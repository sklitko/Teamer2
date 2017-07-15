import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
//import {MdProgressSpinnerModule} from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectComponent } from './components/project/project.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FormProjectComponent } from './components/form-project/form-project.component';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { AreYouSureComponent } from './components/are-you-sure/are-you-sure.component';


const appRoutes: Routes = [
  { path: '', component:DashboardComponent },
  { path: 'add-project', component: FormProjectComponent },
  { path: 'add-task', component: FormTaskComponent },
  { path: ':id', component: ProjectComponent },
  { path: ':id/:task_id', component: TaskComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ProjectComponent,
    TaskComponent,
    TaskListComponent,
    MessagesComponent,
    FormProjectComponent,
    FormTaskComponent,
    AreYouSureComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [AreYouSureComponent],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
