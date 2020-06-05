import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  currentTab = 1;


  constructor() { }

  ngOnInit(): void {
  }

  tabclick(which: number) {
    this.currentTab = which;
  }

}
