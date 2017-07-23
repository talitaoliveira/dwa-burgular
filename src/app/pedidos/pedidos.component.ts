import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  items;
  mensagem;
  usuarioLogado;

  constructor() { }

  ngOnInit() {

    if( localStorage.token ) {
      console.log("ta logado");
      this.usuarioLogado = true;
      this.mensagem = "";
    }else {
      console.log("não ta logado");
      this.usuarioLogado = false;
      this.mensagem = "Você precisa estar logado para finalizar o pedido";
    }

    this.items = JSON.parse(localStorage.carrinho);
  }

  finalizar(){
    this.mensagem = "Parabéns você comprou!";
  }

}
