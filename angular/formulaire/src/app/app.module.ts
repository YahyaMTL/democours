import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavascriptComponent } from './forms/javascript/javascript.component';
import { FormsmoduleComponent } from './forms/formsmodule/formsmodule.component';
import { FormgroupComponent } from './forms/formgroup/formgroup.component';
import { ListeComponent } from './personages/liste/liste.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    FormsmoduleComponent,
    FormgroupComponent,
    ListeComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
