import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

  private url: string = "http://restful-api-dwa.herokuapp.com/users";

  constructor( private http: Http ) { }

  // getProducts() {
  //    return this.http.get(this.url + '/products')
  //     .map(res => res.json());
  // }

  setUser(user) {

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    let data = new URLSearchParams();
    data.append('fullname', user.fullname);
    data.append('phone', user.phone);
    data.append('email', user.email);
    data.append('password', user.password);

    return this.http.post(this.url, data.toString(), options)
      .map(res => res.json());

  }

}

