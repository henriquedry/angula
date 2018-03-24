import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { HeaderComponent } from './header/header.component';
import { Login1Component } from './login1/login1.component';
import { Contatos1Component } from './contatos1/contatos1.component';
import { Serviços1Component } from './serviços1/serviços1.component';
import { AppRoutingModule } from './/app-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    HeaderComponent,
    Login1Component,
    Contatos1Component,
    Serviços1Component,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
