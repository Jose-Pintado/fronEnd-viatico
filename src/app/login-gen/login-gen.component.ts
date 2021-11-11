import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '@general/services/loader.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { MessageService } from 'primeng/api';
import { authCodeFlowConfig } from '../Auth/authCodeFlowConfig';


@Component({
  selector: 'app-login-gen',
  templateUrl: './login-gen.component.html',
  styleUrls: ['./login-gen.component.scss']
})
export class LoginGenComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loginFormValid: boolean = false;

  constructor(
    private loaderService: LoaderService,
    private oauthService: OAuthService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private _router: Router
    ) {
    this.initFormLogin();
    this.oauthService.configure(authCodeFlowConfig);
    //this.oauthService.setStorage(localStorage);
    this.oauthService.loadDiscoveryDocument();
    if (this.oauthService.hasValidAccessToken()) {
      this._router.navigate(['inicio']);
    }
  }

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();

  }
  initFormLogin() {
    this.loginForm = this.formBuilder.group({
      user: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(3)]),
      pass: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(5)]),
    })
  }
  resetFormValidFarmaVigExterno() {
    this.loginForm.reset();
  }
  ingresar() {
    let datos = this.loginForm.value;
    this.loaderService.show();
    this.oauthService
      .fetchTokenUsingPasswordFlowAndLoadUserProfile(
        datos.user,
        datos.pass
      )
      .then(() => {
        this.loaderService.hide();
        this.messageService.add({ severity: 'success', summary: 'Ingresar', detail: 'Datos correctos para ingresar a la plataforma.' });

        setTimeout(() => {

          this._router.navigate(['inicio']);
        },
          500);
      })
      .catch(err => {
        console.error('error logging in', err);
        this.loaderService.hide();
      });
  }
  onSubmit() {
    this.loginFormValid = true;
    if (this.loginForm.valid) {
      this.ingresar();
      return;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Datos incorrectos.' });
    }
  }
}
