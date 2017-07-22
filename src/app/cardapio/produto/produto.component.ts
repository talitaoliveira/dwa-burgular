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
    console.log(localStorage);
  }

  adicionarCarrinho(produto) {
    
    console.log(produto);

    //localStorage['produtos']['0'] = JSON.stringify(produto);


    
  }

}
