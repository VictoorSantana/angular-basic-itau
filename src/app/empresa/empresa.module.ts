import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { EmpresaComponent } from './empresa.component';
import { HeaderComponent } from './components/header/header.component';
import { PoloService } from '../shared/services/polos/polos.service';
import { SharedModule } from '../shared/shared.module';
import { PoloComponent } from './polo/polo.component';
import { FormComponent } from './polo/form/form.component';
import { EmpresaRoutingModule } from './empresa.routing';
import { RouterModule } from '@angular/router';





@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  declarations: [    
    FormComponent,
    PoloComponent, 
    HeaderComponent,
  ],
  providers: [
    PoloService
  ],
  exports: [
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
