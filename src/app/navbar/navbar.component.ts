import { Component, OnInit } from '@angular/core';

import { AuthService } from './../home/login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioLogado;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.usuarioLogado = this.authService.usuarioEstaAutenticado();

  }

}
