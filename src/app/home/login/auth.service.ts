import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Usuario } from './../../perfil/usuario';

@Injectable()
export class AuthService {

  //private usuarioAutenticado: boolean = false;

  private usuarioAutenticado = new EventEmitter<boolean>();

  private url: string = 'http://restful-api-dwa.herokuapp.com/authentication';

  public token: string;
  public expires: string;

  constructor(
    private router: Router,
    private http: Http
  ) { }

  fazerLogin(user: Usuario) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });

    let data = new URLSearchParams();
    data.append('email', user.email);
    data.append('password', user.password);

    return this.http.post(this.url, data.toString(), options)
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;
          let expires = response.json().expires;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', token);
          localStorage.setItem('expires', expires);

          // return true to indicate successful login
          this.usuarioAutenticado.emit(true);
          console.log("logou");
          return true;
        } else {
          // return false to indicate failed login
          this.usuarioAutenticado.emit(false);
          console.log("não logou");
          return false;
          //let body = JSON.stringify(data);
        }
      });
  }

  usuarioEstaAutenticado() {
    // console.log(this.usuarioAutenticado);
    // return this.usuarioAutenticado;

    if (localStorage.token) {
      console.log("ta logado");
      return true;
    }

    console.log("não ta logado");
    return false;

  }

}
