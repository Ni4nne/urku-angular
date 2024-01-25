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

  





  constructor(private route: ActivatedRoute,
              public productService: ProductsService) { }

  ngOnInit() {
    this.route.params
      .subscribe(parameters => {

        //console.log(parameters['id']);

        this.productService.getProduct(parameters['id'])
          .subscribe( (productDescription: any)=> {
            this.productDescription = productDescription;
            console.log(productDescription);
            
          });
      });
  }
}
