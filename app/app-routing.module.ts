import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canLoad: [AuthGuard]
    
  },
  {
    path: 'manual-de-uso',
    loadChildren: () => import('./pages/manual-de-uso/manual-de-uso.module').then( m => m.ManualDeUsoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'medicina',
    loadChildren: () => import('./pages/medicina/medicina.module').then( m => m.MedicinaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule),
    
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'formulario-medico',
    loadChildren: () => import('./pages/formulario-medico/formulario-medico.module').then( m => m.FormularioMedicoPageModule),
    canLoad: [AuthGuard]
  },  
  {
    path: 'cabeza',
    loadChildren: () => import('./pages/cabeza/cabeza.module').then( m => m.CabezaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'pecho',
    loadChildren: () => import('./pages/pecho/pecho.module').then( m => m.PechoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'brazos',
    loadChildren: () => import('./pages/brazos/brazos.module').then( m => m.BrazosPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'manos',
    loadChildren: () => import('./pages/manos/manos.module').then( m => m.ManosPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'cadera',
    loadChildren: () => import('./pages/cadera/cadera.module').then( m => m.CaderaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'piernas',
    loadChildren: () => import('./pages/piernas/piernas.module').then( m => m.PiernasPageModule),
    canLoad: [AuthGuard]
  },









  



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
