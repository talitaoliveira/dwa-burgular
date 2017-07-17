import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioLogado: boolean = false;

  constructor() { }

  ngOnInit() {

    if( localStorage.token ){
      this.usuarioLogado = true;
      console.log("ta logado");
    }else{
      this.usuarioLogado = false;
      console.log("não ta logado");
    }

  }

}
