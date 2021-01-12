import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  public Listas: Lista[] = [];

  constructor() { 
    
  }


  crearLista( titulo: string ){
    const nuevaLista = new Lista(titulo);

    this.Listas.push( nuevaLista );
  }

}