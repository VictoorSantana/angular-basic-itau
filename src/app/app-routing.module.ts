import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmpresaComponent } from './empresa/empresa.component';
import { PoloComponent } from './empresa/polo/polo.component';

const routes: Routes = [
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
