import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor(public wishesSvc: WishesService, public router: Router) { }

  ngOnInit() { }

  listaSeleccionada(lista: Lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/add/ ${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/ ${lista.id}`);
    }
  }

  borrarLista( lista: Lista ) {
    this.wishesSvc.borrarLista(lista);

    
  }

}