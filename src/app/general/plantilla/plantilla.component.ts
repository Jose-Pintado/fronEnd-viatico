import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from 'src/app/Auth/authCodeFlowConfig';
import { MenuItem, MessageService } from 'primeng/api';
import { LoaderService } from '@general/services/loader.service';
import { GeneralService } from '@general/services/general.service';


@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {
  datosUsuario: any;
  itemsUsuario: MenuItem[] = [];
  itemsMenu: MenuItem[] = [];
  itemsMenuDisplay: boolean = true;


  constructor(
    private oAuthService: OAuthService,
    private router: Router,
    private loaderService: LoaderService,
    private generalService: GeneralService,
    private messageService: MessageService,
  ) { 
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.loadDiscoveryDocument();
    this.oAuthService.setupAutomaticSilentRefresh();  
  }

  ngOnInit(): void {
    this.itemsUsuario = [
     /* {
        label: 'Usuario',
        icon: 'pi pi-fw pi-user-edit',
        command: () => this.editUsuario()
      },*/
      {
        label: 'Cerra sesión',
        icon: 'pi pi-fw pi-sign-out',
        command: () => this.logOut()
      }

    ];
    this.getDatosUsuario();
    this.menuValid();
    
  }
  menuValid(){
    if (sessionStorage.getItem("menu_gen") === null) {
      this.loaderService.show();
      this.generalService.getMenu().subscribe(response => {
        if (response.success) {
          this.loaderService.hide();
          this.itemsMenu = response.data;
          sessionStorage.setItem("menu_gen", JSON.stringify(response.data))
          //this.breadcrumbGeneral?.cargar();
        } else {
          this.itemsMenu = [];
        }
      },
        error => {
        });
    } else {
      let dataMenu: any = sessionStorage.getItem("menu_gen");
      var obj = JSON.parse(dataMenu);
      this.itemsMenu = obj;
    }
  }
  activeMenu(event: any) {
    sessionStorage.setItem("menu_gen", JSON.stringify(this.itemsMenu))
  }

  verMenu() {
    if (this.itemsMenuDisplay) {
      this.itemsMenuDisplay = false;
    } else {
      this.itemsMenuDisplay = true;
    }
  }
  getDatosUsuario() {
    this.datosUsuario = this.oAuthService.getIdentityClaims();
    /*sessionStorage.setItem('privilegio',this.datosUsuario.privilegio);
    sessionStorage.setItem('regional',this.datosUsuario.regional);*/
  }

  editUsuario() {

  }
  logOut() {
    this.oAuthService.revokeTokenAndLogout();
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
