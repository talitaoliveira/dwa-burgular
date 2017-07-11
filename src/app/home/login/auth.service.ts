import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Usuario } from './../../perfil/usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  private url: string = 'http://restful-api-dwa.herokuapp.com/users';

  constructor(
    private router: Router,
    private http: Http
  ) { }

  fazerLogin(usuario: Usuario) {

    // if( usuario.nome === 'usuario@email.com' &&
    //   usuario.senha === '123456' ) {
    //     this.usuarioAutenticado = true;

    //     this.mostrarMenuEmitter.emit(true);

    //     this.router.navigate(['/']);

    // }else{
    //     this.usuarioAutenticado = false;
    //     this.mostrarMenuEmitter.emit(false);
    // }

  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
