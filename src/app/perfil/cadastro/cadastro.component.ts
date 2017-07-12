import { Component, OnInit } from '@angular/core';
import { Usuario } from './../usuario';
import { PerfilService } from './../perfil.service';
import { Router } from '@angular/router';

import { AuthService } from './../../home/login/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private usuario: Usuario[] = [];

  mensagem;

  usuarioLogado: boolean = false;

  constructor(
    private perfilService: PerfilService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {

    if( localStorage.token ){
      console.log("ta logado");
      this.usuarioLogado = true;
    }else{
      console.log("não ta logado");
      this.usuarioLogado = false;
    }
  }

  onSubmit(form) {

    this.mensagem = 'Usuário cadastrado, aguarde redirecionamento';
    setTimeout(() => { this.router.navigate(['login']); }, 3000);

    /*let userValue = form.value;

    this.perfilService.setUser(userValue)
    .subscribe(
        data => {
          this.mensagem = 'Usuário cadastrado, aguarde redirecionamento';
           setTimeout(() => { this.router.navigate(['login']); }, 3000);

        },
        err => {
            this.mensagem = 'Erro ao cadastrar usuário ';
        }
      );*/
  }

}
