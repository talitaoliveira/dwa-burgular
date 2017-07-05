import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ItemComponent } from './item/item.component';
import { CardapioComponent } from './cardapio.component';

const cardapioRoutes = [
    {path: '', component: CardapioComponent},
    {path: 'item/:id', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cardapioRoutes)],
  exports: [RouterModule]
})
export class CardapioRoutingModule {}
