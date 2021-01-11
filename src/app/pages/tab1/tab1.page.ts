import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public wishesSvc: WishesService, private router: Router) { }

  agregarLista(){
    this.router.navigateByUrl('/tabs/tab1/add');
  }

}