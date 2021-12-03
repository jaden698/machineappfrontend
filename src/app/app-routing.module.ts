import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { MachinesComponent } from './machines/machines.component';

const routes: Routes = [

  { path: '', redirectTo: 'machines', pathMatch: 'full' },
  {path: 'machines' , component: MachinesComponent},
  {path: 'administration' , component: AdministrationComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
