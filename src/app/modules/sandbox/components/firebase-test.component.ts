import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firebase-test',
  templateUrl: './firebase-test.component.html',
  styleUrls: ['./firebase-test.component.css']
})
export class FirebaseTestComponent implements OnInit {

  items: Observable<any[]>
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.items = this.db.collection('users').valueChanges();
  }

}
