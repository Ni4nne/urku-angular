import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  constructor(private http: HttpClient) {

    //Read Json
    this.http.get('assets/data/data-page.json')
      .subscribe(resp => {

        console.log(resp);
      });
  }
}
