import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuarioLogado: boolean = false;

  ngOnInit() {

  if ( localStorage.token ) {
      this.usuarioLogado = true;
      console.log('ta logado');
    } else {
      this.usuarioLogado = false;
      console.log('não ta logado');
    }

  }

}
