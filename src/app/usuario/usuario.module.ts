import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuarioComponent } from './usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';

import { UsuarioService } from './usuario.service';
import { AuthService } from './login/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    UsuarioComponent,
    CadastroComponent,
    PerfilComponent,
    LoginComponent
  ],
  providers: [UsuarioService, AuthService]
})
export class UsuarioModule { }
