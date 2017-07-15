import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CadastroComponent } from './perfil/cadastro/cadastro.component';
import { LoginComponent } from './home/login/login.component';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'perfil', component: PerfilComponent },
	{ path: 'pedidos', component: PedidosComponent },
	{ path: 'perfil', component: PerfilComponent },
	{ path: 'cadastro', component: CadastroComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'cardapio', component: CardapioComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
