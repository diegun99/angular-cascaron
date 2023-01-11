import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nombre$ = new EventEmitter<string>();  // se coloca el simbolo dolar para indicar que es un observable
 // siempre es conveniente decir que tipo de evento es el que emite el objeto
  constructor() { }
}
