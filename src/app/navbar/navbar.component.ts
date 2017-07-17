import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioLogado: boolean = false;

  constructor() { }

  ngOnInit() {

  if ( localStorage.token ) {
      this.usuarioLogado = true;
      console.log('ta logado');
    } else {
      this.usuarioLogado = false;
      console.log('não ta logado');
    }

  }

}
