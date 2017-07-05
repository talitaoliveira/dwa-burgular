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
  item: any;


  constructor(
    private route: ActivatedRoute,
    private cardapioService: CardapioService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.item = this.cardapioService.getItem(id);
        console.log(this.item);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
