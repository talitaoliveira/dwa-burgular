import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input() produto: any;

  constructor() { }

  ngOnInit() {
  }

  mensagem;

  adicionarCarrinho(produto) {
    
    // console.log(produto);

    // console.log(localStorage);

    localStorage['carrinho'] = JSON.stringify(produto);
    this.mensagem = "Produto adicionado ao carrinho";


    
  }

}
