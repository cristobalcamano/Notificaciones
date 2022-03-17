import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificacionesComponent} from './components/notificaciones/notificaciones.component';

const routes: Routes = [
  {
    path :'',
    redirectTo:'/Notificaciones',
    pathMatch:'full'
  },
  {
    path:'Notificaciones',
    component:NotificacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
