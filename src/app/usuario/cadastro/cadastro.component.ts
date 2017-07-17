import { Component, OnInit } from '@angular/core';

import { Usuario } from './../usuario';
import { Router } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { AuthService } from './../login/auth.service';

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
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {

    

  }

  onSubmit(form) {

    // this.mensagem = 'Usuário cadastrado, aguarde redirecionamento';
    // setTimeout(() => { this.router.navigate(['login']); }, 3000);

    let userValue = form.value;

    this.usuarioService.setUser(userValue)
    .subscribe(
        data => {
          this.mensagem = 'Usuário cadastrado, aguarde redirecionamento';
           setTimeout(() => { this.router.navigate(['login']); }, 3000);

        },
        err => {
            this.mensagem = 'Erro ao cadastrar usuário ';
        }
      );
  }

}
