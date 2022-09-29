import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pages = [
    {
      name: 'Products',
      link: '/products',
    },
    {
      name: 'Carts',
      link: '/cart',
    },
  ];
  activeLink = this.pages[0].link;
  currentRoute: string = '/product';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onTabChange(page: any) {
    this.currentRoute = page.link;
    this.activeLink = this.currentRoute;
    if (this.currentRoute === '/cart') {
      this.router.navigate(['/cart']);
    } else {
      this.router.navigate(['/products']);
    }
  }
}
