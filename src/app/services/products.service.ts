import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  loading = true;
  products: Products[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get('https://urkuangular-default-rtdb.firebaseio.com/products_idx.json')
      .subscribe((resp: any) => {

        this.products = resp;
        this.loading = false;
      });
  }

  getProduct( id: string){
    return this.http.get(`https://urkuangular-default-rtdb.firebaseio.com/products/${ id }.json`);
  }
}