import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopItem } from './store/shop';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  getItem() {
    return this.http.get<ShopItem[]>('http://localhost:3000/shop');
  }

  // addItem(payload: ShopItem) {
  //   return this.http.post<ShopItem>('http://localhost:3000/shop', payload);
  // }

  addItem(payload: ShopItem) {
    return this.http.put<ShopItem>(
      `http://localhost:3000/shop/${payload.id}`,
      payload
    );
  }

  removeItem(id: number) {
    return this.http.put<ShopItem>(`http://localhost:3000/shop/${id}`, id);
  }
}
