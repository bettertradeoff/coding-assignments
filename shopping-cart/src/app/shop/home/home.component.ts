import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectCartItems } from '../store/shop.selector';

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
  activeLink = this.router.url;
  currentRoute: string = '';
  products$ = this.store.pipe(select(selectCartItems));
  quantity = 0;

  constructor(
    private router: Router,
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products$.subscribe((res) => {
      const sum = res.reduce((acc, obj) => {
        return acc + obj.quantity;
      }, 0);

      this.quantity = sum;
    });
  }

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
