import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';
import { DataService } from '../services/data.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent
  ],
  exports: [
    NavbarComponent,
    HijoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [DataService]
})
export class ComponentsModule { }
