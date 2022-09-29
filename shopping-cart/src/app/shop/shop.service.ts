import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopItem } from './store/shop';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<ShopItem[]>('http://localhost:3000/products');
  }
}
