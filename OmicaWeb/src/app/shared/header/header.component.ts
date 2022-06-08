import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  changeText: boolean;

  items: MenuItem[];

  constructor() {
    this.changeText = false;
   }

  ngOnInit(): void {

    this.items = [
      {
          label: 'Mi Omica'
      }
  ];
  }

}
