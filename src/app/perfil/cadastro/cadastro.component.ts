import { Component, OnInit } from '@angular/core';
import { Usuario } from './../usuario';
import { PerfilService } from './../perfil.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private usuario: Usuario[] = [];

  private user: Usuario;

  constructor(private perfilService: PerfilService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    var result,
        userValue = form.value;

    this.perfilService.setUser(userValue).subscribe(data => console.log(data));
  }

}
