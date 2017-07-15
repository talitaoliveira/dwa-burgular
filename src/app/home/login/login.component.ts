import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


import { AuthService } from './auth.service';
import { Usuario } from './../../perfil/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  boolLogado: boolean;

  mensagem;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {

    if( localStorage.token ){
      console.log("ta logado");
    }else{
      console.log("não ta logado");
    }


  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario)
    //.subscribe( data => this.boolLogado = data );
    .subscribe(
        data => {
          this.mensagem = 'Login efetuado, aguarde redirecionamento';
           setTimeout(() => { this.router.navigate(['cardapio']); }, 3000);

        },
        err => {
            this.mensagem = 'Erro ao fazer login ';
        }
      );

    /* this.mensagem = 'Usuário cadastrado, aguarde redirecionamento';
    setTimeout(() => { this.router.navigate(['login']); }, 3000); */
  }

}
