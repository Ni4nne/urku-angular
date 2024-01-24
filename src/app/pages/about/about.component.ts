import { Component } from '@angular/core';

//Import service info
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {
  
  constructor( public infoService: PageInfoService ){
  }
}