import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './pages/home/home.component';
import { ValuarInmuebleComponent } from './pages/valuar-inmueble/valuar-inmueble.component';
import { ValorInmobiliarioComponent } from './pages/valor-inmobiliario/valor-inmobiliario.component';
import { ReporteBrainbowComponent } from './pages/reporte-brainbow/reporte-brainbow.component';
import { SeguroHogarOnlineComponent } from './pages/seguro-hogar-online/seguro-hogar-online.component';
import { HipotecaOnlineComponent } from './pages/hipoteca-online/hipoteca-online.component';
import { SectorInmobiliarioComponent } from './pages/sector-inmobiliario/sector-inmobiliario.component';
import { SegurosComponent } from './pages/seguros/seguros.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'valuar-inmueble', component: ValuarInmuebleComponent },
  { path: 'valor-inmobiliario', component: ValorInmobiliarioComponent },
  { path: 'reporte-brainbow', component: ReporteBrainbowComponent },
  { path: 'seguro-hogar-online', component: SeguroHogarOnlineComponent },
  { path: 'hipoteca-online', component: HipotecaOnlineComponent },
  { path: 'sector-inmobiliario', component: SectorInmobiliarioComponent },
  { path: 'seguros', component: SegurosComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
