import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  @Input() textTitle: String;
  constructor() { }

  ngOnInit() {
  }

}
