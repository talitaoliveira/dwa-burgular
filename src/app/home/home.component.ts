import { Component, OnInit } from '@angular/core';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioLogado;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.usuarioLogado = this.authService.usuarioEstaAutenticado();

  }

}
