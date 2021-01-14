import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public wishesSvc: WishesService, private router: Router, private alertCtl: AlertController) { }

  async agregarLista() {

    const alert = await this.alertCtl.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {

            // Validar la data
            if (data.titulo.length === 0) {
              return;
            }

            // Metodo para crear la lista
            const listaId = this.wishesSvc.crearLista(data.titulo);

            // Redireccion
            this.router.navigateByUrl(`/tabs/tab1/add/ ${ listaId }`);
          }
        }
      ]
    });
    alert.present();
  }

  listaSeleccionada( lista: Lista ){
    this.router.navigateByUrl(`/tabs/tab1/add/ ${ lista.id }`);
  }
}