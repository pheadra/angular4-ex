import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appTitle = '삼풍관리 시스템';

  constructor() { }

  ngOnInit() {
  }

  searchProduct(no: number) {
    console.log(`serch: ${no}`);
  }
}
