import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDonarComponent } from './add-donar/add-donar.component';
import { SearchDonarComponent } from './search-donar/search-donar.component';


const routes: Routes = [
  {
    path:'add',component:AddDonarComponent, pathMatch:'full'
  },
  {
    path:'search',component:SearchDonarComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
