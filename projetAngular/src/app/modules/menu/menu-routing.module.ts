import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from 'src/app/components/add-menu/add-menu.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';

const routes: Routes = [
  {path:'',component:AddMenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
