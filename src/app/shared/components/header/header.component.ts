import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() textTitle: String;
  constructor() { }

  ngOnInit() {
  }

}
