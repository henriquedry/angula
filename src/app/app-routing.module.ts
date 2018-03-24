import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Login1Component } from './login1/login1.component';
import { Serviços1Component } from './servi\u00E7os1/servi\u00E7os1.component';
import { Contatos1Component } from './contatos1/contatos1.component';



const routes: Routes = [

{ path: '', redirectTo: '/pagina1', pathMatch: 'full' },

{ path: 'pagina1', component: Pagina1Component },
{ path: 'login1', component: Login1Component },
{ path: 'serviços1', component: Serviços1Component },
{ path: 'contatos1', component: Contatos1Component }

];

@NgModule({

imports: [ RouterModule.forRoot(routes) ],

exports: [ RouterModule ]

})

export class AppRoutingModule {}