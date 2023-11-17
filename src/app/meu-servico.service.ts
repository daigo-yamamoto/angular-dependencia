import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeuServicoService {

  private itens = ['Item 1', 'Item 2', 'Item 3'];

  constructor() { }

  obterItens(): string[] {
    return this.itens;
  }
}
