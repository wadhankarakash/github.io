import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { IntroductionComponent } from './introduction/introduction.component'

@NgModule({
  declarations: [
    AppComponent,
  HeaderComponent,
  IntroductionComponent
  
  ],
  imports: [
    BrowserModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
