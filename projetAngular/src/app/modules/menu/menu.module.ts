import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuRoutingModule } from './menu-routing.module';
import { AddMenuComponent } from '../../components/add-menu/add-menu.component';


@NgModule({
  declarations: [

    AddMenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule
  ]
})
export class MenuModule { }
