import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CardapioService } from './../cardapio.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  produto: any;


  constructor(
    private route: ActivatedRoute,
    private cardapioService: CardapioService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.cardapioService.getProduct(id).subscribe(data => this.produto = data);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
