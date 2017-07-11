import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardapioService } from './cardapio.service';
import { CardapioComponent } from './cardapio.component';
import { ItemComponent } from './item/item.component';
import { CardapioRoutingModule } from './cardapio.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CardapioRoutingModule
  ],
  declarations: [CardapioComponent],
  providers: [CardapioService]
})
export class CardapioModule { }
