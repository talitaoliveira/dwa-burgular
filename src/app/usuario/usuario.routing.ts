import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const usuarioRoutes: Routes = [
  { path: 'usuario', component: UsuarioComponent, pathMatch: 'full' },
  { path: 'usuario/perfil', component: PerfilComponent },
  { path: 'usuario/cadastro', component: CadastroComponent},
  { path: 'usuario/login', component: LoginComponent}
];

export const usuarioRouting = RouterModule.forChild(usuarioRoutes);