import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firebaseConfig = {
    apiKey: 'AIzaSyCZawieb0LESNiczNf2WkjuCf9rYGy3InM',
    authDomain: 'gtdx-400d7.firebaseapp.com',
    databaseURL: 'https://gtdx-400d7.firebaseio.com',
    projectId: 'gtdx-400d7',
    storageBucket: 'gtdx-400d7.appspot.com',
    messagingSenderId: '542122362028',
    appId: '1:542122362028:web:d3e2c119344886050a4b09',
    measurementId: 'G-7RLE6DS4NY'
  };

  database: firebase.database.Database;

  constructor() {
    firebase.initializeApp(this.firebaseConfig);
    firebase
      .auth()
      .signInWithEmailAndPassword('grantv@bbd.co.za', 'Test123$456');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // For testing example only
        // Will be called async so getalltasks will not necessarily have the new task yet
        // Refresh page
         this.createTask();
         this.getAllTasks();
      }
    });
  }

  createTask() {
    const model = new TaskModel('Paint the house', 'In', 'Renovations', [
      'home',
      'handyman'
    ]);
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
        const tasks: TaskModel[] = [];
        querySnapshot.forEach(doc => {
          tasks.push(doc.data() as TaskModel);
        });
        console.log(tasks);
      });

  }

}
