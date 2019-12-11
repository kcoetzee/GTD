import { Injectable } from '@angular/core';
import { ITask } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class TaskService {

    constructor(private http: HttpClient){

    }

    getTasks() : Observable<ITask[]> {
        return this.http.get<ITask[]>("api/tasks.json");
    }
}