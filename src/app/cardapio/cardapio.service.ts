import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CardapioService {

  private url: string = "http://restful-api-dwa.herokuapp.com/products";

  constructor( private http: Http ) { }

  getProducts() {
     return this.http.get(this.url)
      .map(res => res.json());
  }

}
