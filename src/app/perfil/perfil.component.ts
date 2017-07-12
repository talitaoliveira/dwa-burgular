import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  autenticado: boolean = false;

  constructor() { }

  ngOnInit() {

    if( localStorage.token ){
      console.log("ta logado");
      this.autenticado = true;
    }else{
      console.log("não ta logado");
      this.autenticado = false;
    }

  }

}
