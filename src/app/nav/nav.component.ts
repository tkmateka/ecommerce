import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navItems: string[] = [
    'HOME',
    'PAGE',
    'BLOG',
    'SHOP',
    'CHECKOUT',
    'MY ACCOUNT',
    'CONTACT',
    'BUY NOW',
  ];

  constructor() {}

  ngOnInit(): void {}
}
