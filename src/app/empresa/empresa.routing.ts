import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoloComponent } from './polo/polo.component';
import { FormComponent } from './polo/form/form.component';

const routes: Routes = [
    {
        path: 'polos', component: PoloComponent,
    },
    {
        path: 'polos/:action', component: FormComponent,
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmpresaRoutingModule { }
