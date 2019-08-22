import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
  { path: 'home',canActivate: [AuthGuard], loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'start', canActivate: [AuthGuard], loadChildren: './pages/start/start.module#StartPageModule'},
  { path: 'play',canActivate: [AuthGuard], loadChildren: './pages/play/play.module#PlayPageModule'},
  { path: 'compte',canActivate: [AuthGuard], loadChildren: './pages/compte/compte.module#ComptePageModule'},
  { path: 'register',canActivate: [AuthGuard], loadChildren: './pages/register/register.module#RegisterPageModule'},
  { path: 'tirage',canActivate: [AuthGuard], loadChildren: './pages/tirage/tirage.module#TiragePageModule'},
  { path: 'gagnant',canActivate: [AuthGuard], loadChildren: './pages/gagnant/gagnant.module#GagnantPageModule'},
  { path: 'merci',canActivate: [AuthGuard], loadChildren: './pages/merci/merci.module#MerciPageModule' },
  { path: 'newcompte',canActivate: [AuthGuard], loadChildren: './pages/newcompte/newcompte.module#NewcomptePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
