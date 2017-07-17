import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardapioService } from './cardapio.service';
import { CardapioComponent } from './cardapio.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardapioComponent, ProdutoComponent],
  providers: [CardapioService]
})
export class CardapioModule { }
