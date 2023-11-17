import { Component } from '@angular/core';
import { MeuServicoService } from './meu-servico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de Itens';
  itens: string[];

  constructor(private meuServico: MeuServicoService) {
    this.itens = meuServico.obterItens();
  }
}
