import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  loading = true;
  products: Products[] = [];
  productsFilter: Products[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise<void>((resolve, reject) => {

      this.http.get<Products[]>('https://urkuangular-default-rtdb.firebaseio.com/products_idx.json')
        .subscribe((resp: Products[]) => {
          this.products = resp;
          this.loading = false;
          resolve();
        });
    });
  }
  
  getProduct(id: string) {
    return this.http.get(`https://urkuangular-default-rtdb.firebaseio.com/products/${id}.json`);
  }

  searchProduct( term: string ){

    if( this.products.length === 0){
      //load products
      this.loadProducts().then( ()=> {
        //after having the products
        this.filtProducts( term );
      });
    }else{
      //apply filter
      this.filtProducts( term );
    }
  }

  private filtProducts( term: string ){

    this.productsFilter = [];

    term = term.toLocaleLowerCase();

    this.products.forEach( prod =>{

      const titleLower = prod.title.toLocaleLowerCase();

      if( prod.category.indexOf( term) >= 0 || titleLower.indexOf( term) >= 0){
        this.productsFilter.push ( prod );
      }
    });
  }
}