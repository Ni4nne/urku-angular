import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../services/page-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  
})
export class HeaderComponent implements OnInit {
  constructor(public _service: PageInfoService,
              private router: Router) {}

  ngOnInit() {
    
  }

  searchProduct( term: string){

    if ( term.length < 1) {
      return;
    }

      this.router.navigate(['/search', term]);
      
  }

}
