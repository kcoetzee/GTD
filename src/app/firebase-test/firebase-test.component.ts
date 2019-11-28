import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../shared/firebase-service.service';
import { ListModel } from '../models/list.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-firebase-test',
  templateUrl: './firebase-test.component.html',
  styleUrls: ['./firebase-test.component.css']
})
export class FirebaseTestComponent implements OnInit, OnDestroy {

  lists: ListModel[] = [];
  subs: Subscription;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.subs = this.firebaseService.listsUpdated.subscribe(
      (res: ListModel[]) => {
        this.lists = res;
      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
