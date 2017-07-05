import { Component, OnInit } from '@angular/core';
import { CardapioService } from './cardapio.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  cardapio;

  constructor(private cardapioService: CardapioService) { }

  ngOnInit() {
    this.cardapioService.getProducts()
      .subscribe(data => this.cardapio = data);
  }

}
