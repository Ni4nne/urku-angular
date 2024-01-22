import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page-interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  info: InfoPage = {};
  loaded = false;

  constructor(private http: HttpClient) {

    //Read Json file
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: InfoPage) => {
        this.loaded = true;
        this.info = resp;

        console.log(resp);
      });
  }
}