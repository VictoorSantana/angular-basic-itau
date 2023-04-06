import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/polos',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./empresa/empresa.module').then(m => m.EmpresaModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
