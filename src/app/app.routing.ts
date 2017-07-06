import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CardapioComponent } from './cardapio/cardapio.component';

const APP_ROUTES: Routes = [
	{ path: 'cardapio', component: CardapioComponent },
	{ path: 'perfil', component: PerfilComponent },
	{ path: 'pedidos', component: PedidosComponent },
	{ path: 'home', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
