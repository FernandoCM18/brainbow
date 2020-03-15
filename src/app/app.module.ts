import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ValuarInmuebleComponent } from './pages/valuar-inmueble/valuar-inmueble.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ValorInmobiliarioComponent } from './pages/valor-inmobiliario/valor-inmobiliario.component';
import { ReporteBrainbowComponent } from './pages/reporte-brainbow/reporte-brainbow.component';
import { SeguroHogarOnlineComponent } from './pages/seguro-hogar-online/seguro-hogar-online.component';
import { HipotecaOnlineComponent } from './pages/hipoteca-online/hipoteca-online.component';
import { SectorInmobiliarioComponent } from './pages/sector-inmobiliario/sector-inmobiliario.component';
import { SegurosComponent } from './pages/seguros/seguros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ValuarInmuebleComponent,
    AcercaDeComponent,
    ContactoComponent,
    ValorInmobiliarioComponent,
    ReporteBrainbowComponent,
    SeguroHogarOnlineComponent,
    HipotecaOnlineComponent,
    SectorInmobiliarioComponent,
    SegurosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
