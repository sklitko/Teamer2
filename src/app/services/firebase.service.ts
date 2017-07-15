import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  projects: FirebaseListObservable<Project[]>;
  project: FirebaseObjectObservable<Project>;
  tasks: FirebaseListObservable<Task[]>;
  task: FirebaseObjectObservable<Task>;
  messages: FirebaseListObservable<Message[]>;

  //project_id: string;

  constructor(private db: AngularFireDatabase) { }

  getProjects() {
    this.projects = this.db.list('/projects') as FirebaseListObservable<Project[]>
    return this.projects;
  }

  getProject(id) {
    this.project = this.db.object('/projects/' + id) as FirebaseObjectObservable<Project>
    return this.project;
  }

  getTasks(project_id) {
    if (!project_id) return;

    // this.tasks = this.db.list('/tasks', {
    //   query: {
    //     orderByChild: 'project_id',
    //     equalTo: project_id
    //   }
    // }) as FirebaseListObservable<Task[]>

    this.tasks = this.db.list(`tasks/${project_id}`) as FirebaseListObservable<Task[]>
    return this.tasks;
  }

  getTask(project_id, task_id) {
    this.task = this.db.object(`tasks/${project_id}/${task_id}`) as FirebaseObjectObservable<Task>
    return this.task;
  }

  getMessages(task_id) {
    if (!task_id) return;
    // this.messages = this.db.list('/messages',{
    //   query: {
    //     orderByChild: 'task_id',
    //     equalTo: task_id
    //   }
    // }) as FirebaseListObservable<Message[]>

    this.messages = this.db.list(`messages/${task_id}`) as FirebaseListObservable<Message[]>
    return this.messages;
  }


  addProject(project) {
    this.projects.push(project);
  }

  deleteProject(project) {
    this.projects.remove(project);
    let items = this.db.list('/tasks');
    items.remove(project);
  }

  addTask(data, task) {
    if (!data) {
      this.tasks.push(task);
    } else {
      let items = this.db.list(`tasks/${data}`);
      items.push(task);
    }

  }

  addMessage(message) {
    console.log(message);
    this.messages.push(message);
  }

}

interface Project {
  key: string;
  title: string;
  author?: string;
}

interface Task {
  key: string;
  title: string;
}

interface Message {
  key: string;
  text: string;
  author?: string;

}
