import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mensajeNavBar = 'Navbar!';

  constructor(private dataService: DataService) { }
//  suscribirme a los cambios que emita el observable nombre
  ngOnInit() {

    this.dataService.nombre$.subscribe(
      texto => {
        this.mensajeNavBar = texto; // el mensaje es igual al texto que estoy recibiendo en el observable
      console.log("navbar: ",texto)
      }

    )// al suscribirnos,, cuaqluier cambio que nombre emita,, podemos hacer cambios
  }

}
