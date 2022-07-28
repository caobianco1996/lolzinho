import { Component, OnInit } from '@angular/core';
import { HeroisService } from '../serviços/herois.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  constructor(
    private heroisService : HeroisService
  ) { 
    this.listHerois();
  }

  ngOnInit(): void {
  }

  listHerois(){
    this.heroisService.getHerois().subscribe(
      (sucesso) => {
        console.log(sucesso)
      }
    )
  }
}
