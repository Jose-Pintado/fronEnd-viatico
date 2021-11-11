import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

import { environment } from '@env/environment';

import { authCodeFlowConfig } from './Auth/authCodeFlowConfig';
import { OAuthService } from 'angular-oauth2-oidc';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sia-vpep-frontend';

  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private __oAuthService: OAuthService,
  ) {
    this.__oAuthService.configure(authCodeFlowConfig);
    this.__oAuthService.loadDiscoveryDocument();
    this.__oAuthService.setupAutomaticSilentRefresh();
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.primengConfig.setTranslation(environment.lang);
  }
}
