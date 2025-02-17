import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/components/login/login.module';
import { LoginRoutingModule } from './components/login/components/login/login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CallbackComponent } from './components/callback/callback.component';



@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LoginRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
