import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/firebase-service.service';
import { ListModel } from '../models/list.model';

@Component({
  selector: 'app-firebase-test',
  templateUrl: './firebase-test.component.html',
  styleUrls: ['./firebase-test.component.css']
})
export class FirebaseTestComponent implements OnInit {

  lists: ListModel[] = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.listsUpdated.subscribe(
      (res: ListModel[]) => {
        this.lists = res;
      }
    );
  }

}
