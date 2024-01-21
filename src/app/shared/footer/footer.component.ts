import { Component } from '@angular/core';

//Import service info
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor( public _service: PageInfoService ){


  }

}
