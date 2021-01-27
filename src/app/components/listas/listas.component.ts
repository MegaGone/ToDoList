import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  // Permite seleccionar un componente o elemento HTML
  @ViewChild(IonList) lista: IonList;
  @Input() terminada = true;
  public Lista: Lista;

  constructor(public wishesSvc: WishesService, public router: Router, private alertCtrl: AlertController) { }

  ngOnInit() { }

  listaSeleccionada(lista: Lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/add/ ${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/ ${lista.id}`);
    }
  }

  borrarLista(lista: Lista) {
    this.wishesSvc.borrarLista(lista);
  }

  async editarLista(lista: Lista) {

    const alert = await this.alertCtrl.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Axtualizar',
          handler: (data) => {
            console.log(data);

            // Validar la data
            if (data.titulo.length === 0) {
              return;
            }

            lista.titulo = data.titulo;

            this.wishesSvc.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();
  }

}