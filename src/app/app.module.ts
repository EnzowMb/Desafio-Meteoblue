import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Session1Component } from './components/session1/session1.component';
import { Session2Component } from './components/session2/session2.component';
import { Session3Component } from './components/session3/session3.component';
import { Session4Component } from './components/session4/session4.component';
import { Session5Component } from './components/session5/session5.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Session1Component,
    Session2Component,
    Session3Component,
    Session4Component,
    Session5Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
