import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicoModule } from './publico/publico.module';
import { PainelComponent } from './publico/paginas/painel/painel.component';

@NgModule({
  declarations: [AppComponent, PainelComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PublicoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
