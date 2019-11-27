import { Injectable, OnInit, EventEmitter, Output } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import { TaskModel } from '../models/task.model';
import { ListModel } from '../models/list.model';
import { firebaseconfig } from 'src/environments/firebaseconfig';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  database: firebase.database.Database;
  lists: ListModel[] = [];
  tasks: TaskModel[] = [];
  @Output() listsUpdated = new EventEmitter<ListModel[]>();
  @Output() tasksUpdated = new EventEmitter<TaskModel[]>();

  constructor() {
    firebase.initializeApp(firebaseconfig.config);
    firebase
      .auth()
      .signInWithEmailAndPassword(firebaseconfig.username, firebaseconfig.password);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // For testing example only
        // Will be called async so getalltasks will not necessarily have the new task yet
        // Refresh page
  //       this.createTask();
        this.getAllTasks();
        this.getAllLists();
      }
    });
  }

  createTask(model: TaskModel) {
    firebase
      .firestore()
      .collection('tasks')
      .doc()
      .set(Object.assign({}, model));
  }

  getAllTasks() {
    firebase
      .firestore()
      .collection('tasks')
      .get()
      .then(querySnapshot => {
        this.tasks = [];
        querySnapshot.forEach(doc => {
          const model = doc.data() as TaskModel;
          model.Id = doc.id;
          this.tasks.push(model);
        });
        this.tasksUpdated.emit(this.tasks);
      });

  }

  getAllLists() {
    firebase
      .firestore()
      .collection('lists')
      .get()
      .then(querySnapshot => {
        this.lists = [];
        querySnapshot.forEach(doc => {
          const model = doc.data() as ListModel;
          model.Id = doc.id;
          this.lists.push(model);
        });
        this.listsUpdated.emit(this.lists);
        // this.createTasks();
      });
  }

  getListId(type: string) {
    const list = this.lists.find(x => x.Type === type);
    return list ? list.Id : '';
  }

  createTasks() {
    this.createTask(new TaskModel(null, 'Bake a cake', this.getListId('IN'), '', false, null, []));
    this.createTask(new TaskModel(null, 'Sell the house', this.getListId('IN'), '', false, null, []));
    this.createTask(new TaskModel(null, 'Paint the town red', this.getListId('IN'), '', false, null, []));
    this.createTask(new TaskModel(null, 'Send birthday email to Mom', this.getListId('NA'), '', false, null, ['home', 'birthdays']));
    this.createTask(new TaskModel(null, 'Buy curtain railings', this.getListId('NA'), 'Renovations', false, null, ['home']));
    this.createTask(new TaskModel(null, 'Select wall paint colour', this.getListId('NA'), 'Renovations', false, null, []));
    this.createTask(new TaskModel(null, 'Sales report from Brian', this.getListId('WF'), '', false, null, []));
    this.createTask(new TaskModel(null, 'Pay rent', this.getListId('CA'), '', false, new Date(2019, 11, 29), []));
    this.createTask(new TaskModel(null, 'Watch the new superhero movie', this.getListId('CA'), '', false, new Date(2019, 11, 29), []));
  }

  getTasksForType(listType: string): TaskModel[] {
    const id = this.getListId(listType);
    if (id) {
      return this.tasks.filter(x => x.List === id);
    } else {
      return [];
    }
  }

}
