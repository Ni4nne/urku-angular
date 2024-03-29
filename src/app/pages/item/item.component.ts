import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductDescription } from '../../interfaces/product-description.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

export class ItemComponent implements OnInit {

  productDescription: any;
  id: any;

  constructor(private route: ActivatedRoute,
    public productService: ProductsService) { }

  ngOnInit() {
    this.route.params
      .subscribe(parameters => {

        this.productService.getProduct(parameters['id'])
          .subscribe((productDescription: any) => {
            this.id = parameters['id'];
            this.productDescription = productDescription;
          });
      });
  }
}