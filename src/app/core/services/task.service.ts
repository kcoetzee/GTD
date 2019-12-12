import { Injectable } from '@angular/core';
import { ITask } from 'src/app/shared/models/task.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private url: string = "api/tasks.json";
    constructor(private http: HttpClient){

    }

    getTasks(): Observable<ITask[]> {
        return this.http.get<ITask[]>(this.url);
    }
}