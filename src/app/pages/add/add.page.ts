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

}