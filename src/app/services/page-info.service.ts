import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page-interface';

@Injectable({
  providedIn: 'root'
})

export class PageInfoService {
  info: InfoPage = {};
  loaded = false;

  team: any[] = [];

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    //Read Json file from assets
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: InfoPage) => {
        this.loaded = true;
        this.info = resp;
      });
  }

  private loadTeam(){
    //Read Json file from firebase url
    this.http.get('https://urkuangular-default-rtdb.firebaseio.com/workteam.json')
      .subscribe( (resp: any) => {
        
        this.team = resp;
      });
  }




}
