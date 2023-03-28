import { Component, OnInit } from '@angular/core';
import { faHome, faUtensils, faChartLine, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  list = [
    {
      number: '1',
      name: 'home',
      icon: faHome,
      route: '/login'
    },
    {
      number: '2',
      name: 'programs',
      icon: faCalendarDay,
      route: '/login'
    },
    {
      number: '3',
      name: 'nutrition',
      icon: faUtensils,
      route: '/login'
    },
    {
      number: '4',
      name: 'statistics',
      icon: faChartLine,
      route: '/login'
    }
  ]

  constructor() {}

  ngOnInit(): void {
  }

}
