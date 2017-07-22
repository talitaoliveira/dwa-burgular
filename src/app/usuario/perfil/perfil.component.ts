import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @Input() usuario: any;
  mensagem;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  sairLogin() {
    localStorage.clear();
    this.mensagem = 'Saindo...';
    setTimeout(() => { this.router.navigate(['cardapio']); }, 3000);
  }

}
