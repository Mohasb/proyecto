import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { TareasComponent } from './tareas/tareas.component';
import { IncrementorComponent } from './incrementor/incrementor.component';
import { BotonesComponent } from './botones/botones.component';
import { FechaComponent } from './fecha/fecha.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    TareasComponent,
    IncrementorComponent,
    BotonesComponent,
    FechaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
