
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { routing } from './app.routing';
import { CardapioService } from './cardapio/cardapio.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CardapioComponent,
    PerfilComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CardapioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
