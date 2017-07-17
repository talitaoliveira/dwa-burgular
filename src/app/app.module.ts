import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { CardapioModule } from './cardapio/cardapio.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { LoginComponent } from './usuario/login/login.component';

import { routing } from './app.routing';

// import { usuarioRouting } from './usuario/usuario.routing';

// import { UsuarioModule } from './usuario/usuario.module';

import { AuthGuard } from './guards/auth-guard.service';
import { AuthService } from './usuario/login/auth.service';
import { UsuarioService } from './usuario/usuario.service';
import { CarrinhoComponent } from './navbar/carrinho/carrinho.component';
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    UsuarioComponent,
    PerfilComponent,
    CadastroComponent,
    LoginComponent,
    CarrinhoComponent,
    PedidosComponent
  ],
  imports: [
     BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CardapioModule,
    // usuarioRouting,
    // UsuarioModule
  ],
  providers: [AuthGuard, AuthService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
