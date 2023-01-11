import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  cambiarMensaje() {
this.dataService.nombre$.emit('Diegun')// cada vez que se presione el boton,, dispara el observable
  }

}
