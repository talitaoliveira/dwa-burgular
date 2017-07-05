import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CardapioService {

  private url: string = "http://restful-api-dwa.herokuapp.com";

  constructor( private http: Http ) { }

  getProducts() {
     return this.http.get(this.url + '/products')
      .map(res => res.json());
  }

  getItem(id: number) {
     return this.http.get(this.url + '/items/' + id)
      .map(res => res.json());
  }

}
