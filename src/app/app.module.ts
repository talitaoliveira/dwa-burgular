import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PedidosComponent } from './pedidos/pedidos.component';

import { ItemComponent } from './cardapio/item/item.component';
import { CardapioModule } from './cardapio/cardapio.module';
import { PerfilModule } from './perfil/perfil.module';

import { HomeModule } from './home/home.module';
import { AuthGuard } from './guards/auth-guard.service';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PedidosComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    CardapioModule,
    PerfilModule,
    routing,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
