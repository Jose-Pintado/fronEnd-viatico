import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoaderService } from './general/services/loader.service';
import { DocumentoGenService } from './general/services/documento-gen.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoginGenComponent } from './login-gen/login-gen.component';

//import module
import { GeneralModule } from './general/general.module';
import { CorrespondenciaModule } from './correspondencia/correspondencia.module';

//primeng
import { PasswordModule } from 'primeng/password';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { environment } from '@env/environment';
import { PasajesviaticosModule } from './pasajes-viaticos/pasajesviaticos.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginGenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: environment.OAUTH2OPENID,
        sendAccessToken: true
      }
    }),
    //modulos app
    GeneralModule,
    CorrespondenciaModule,
    PasajesviaticosModule,

    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
  ],
  providers: [DocumentoGenService,LoaderService,MessageService, ConfirmationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
