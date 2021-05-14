import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MotocyklComponent} from "./motocykl/motocykl.component";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MotocyklComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
