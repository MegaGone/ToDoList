import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private wishesSvc: WishesService, private route: ActivatedRoute) { 
    const id = this.route.snapshot.paramMap.get('listaId');
  }

  ngOnInit() {
  }

}
