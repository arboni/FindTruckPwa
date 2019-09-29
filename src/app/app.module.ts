import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule} from '@angular/common/http';
import { GeoComponent } from './geo/geo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HttpClientModule,
    CadastroComponent,
    GeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAFWuTsunP3aVWHD1h-OGH48L_T3OdcwMI'}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot([
      { path: '', component: GeoComponent },
      { path: 'app-geo/:GeoComponent', component: GeoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
