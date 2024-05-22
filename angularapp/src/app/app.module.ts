import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo } from './demo/demo.component';
import { Demo2 } from './demo2/demo2.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { TwoWayDataBindComponent } from './two-way-data-bind/two-way-data-bind.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Demo,
    Demo2,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AlertComponent,
    DataBindComponent,
    TwoWayDataBindComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
