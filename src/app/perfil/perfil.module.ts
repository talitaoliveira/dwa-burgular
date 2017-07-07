import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PerfilComponent } from './perfil.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilService } from './perfil.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CadastroComponent, PerfilComponent],
  providers: [PerfilService]
})
export class PerfilModule { }
