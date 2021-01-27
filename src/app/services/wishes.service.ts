import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  public Listas: Lista[] = [];

  constructor() {
    this.obtenerStorage();
  }


  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.Listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  borrarLista(lista: Lista) {
    this.Listas = this.Listas.filter(rawLista => rawLista.id !== lista.id);

    this.guardarStorage();
  }

  obtenerLista(id: string | number) {
    id = Number(id);

    return this.Listas.find(listaData => listaData.id === id);
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.Listas));
  }

  obtenerStorage() {
    if (localStorage.getItem('data')) {
      this.Listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.Listas = [];
    }
  }

}