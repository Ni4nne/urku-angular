import { Component } from '@angular/core';
import { PageInfoService } from './services/page-info.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor( public PageInfoService: PageInfoService,
              public productsService: ProductsService ){
  }
}