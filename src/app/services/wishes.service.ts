import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  public Listas: Lista[] = [];

  constructor() { 
    
    const lista1 = new Lista('Super');
    const lista2 = new Lista('Comida');

    this.Listas.push(lista1, lista2)

    console.log(this.Listas);
  }


}