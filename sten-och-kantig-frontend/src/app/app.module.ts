import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RockstjarnorListaComponent } from './rockstjarnor-lista/rockstjarnor-lista.component';

// Configure modules
@NgModule({
  declarations: [
    AppComponent,
    RockstjarnorListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
