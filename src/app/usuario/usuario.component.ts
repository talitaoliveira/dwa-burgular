import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioLogado: boolean = false;
  objUsuario;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {

    if( localStorage.token ){
      this.usuarioLogado = true;
      console.log("ta logado");

      let usuario = localStorage.getItem("usuario");
      this.objUsuario = JSON.parse(usuario);

    }else{
      this.usuarioLogado = false;
      console.log("não ta logado");
    }

  }

}
