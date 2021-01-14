import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  public lista: Lista;
  public nombreItem = '';

  constructor(private wishesSvc: WishesService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('listaId');

    this.lista = this.wishesSvc.obtenerLista(id);
  }

  ngOnInit() {
  }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ItemModel(this.nombreItem);
    this.lista.items.push(nuevoItem);

    // Purgar input
    this.nombreItem = '';

    // Actualizar el storage
    this.wishesSvc.guardarStorage();
  }

  cambioCheck(item: ItemModel) {

    // filtrar los items que esten pendientes
    const pendientes = this.lista.items.filter(itemData => !itemData.completado).length;

    // mostrar cuando la lista este terminada
    if( pendientes === 0){
      this.lista.over = new Date();
      this.lista.completada = true;

    } else{
      this.lista.over = null;
      this.lista.completada = false;
    }

    this.wishesSvc.guardarStorage();
  }

  eliminarItem( i: number ){
    this.lista.items.splice(i, 1);

    this.wishesSvc.guardarStorage();
  }

}