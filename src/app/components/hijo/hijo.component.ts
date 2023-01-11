import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit,OnDestroy {
  mensajeHijo : string = 'Mensaje!';
  nombreSuscription : Subscription;// se pueden almacenar las subscripciones para posteriormente unsubscribirse
  constructor(public dataService: DataService) { }


  ngOnInit() {

    // this.nombreSuscription =this.dataService.nombre$.subscribe(// siempre es imprescindible cerrar el suscripcion para evitarfugas de memoria
    //   texto=>{this.mensajeHijo = texto

    //   console.log('texto: ',texto)
    // }
    // );

    // this.dataService.nombre$.emit('otra cosa emitida')
  }

  ngOnDestroy(): void {
    // this.nombreSuscription.unsubscribe()
  }

}
