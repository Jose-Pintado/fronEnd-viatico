// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //cors bakend
  OAUTH2OPENID: [
    'https://testback1.vicepresidencia.gob.bo/',
    'http://localhost:8082/',
    'http://localhost:8083/',
  ],
  //REALM
  OAUTH2USER: 'vpep',
  //cambiar realm para acceso
  OAUTH2SERVER: 'https://testauth.vicepresidencia.gob.bo/auth/realms/vpep',
  OAUTH2CLIENTID: 'tokapu-cli',
  OAUTH2SERVICE: "https://testauth.vicepresidencia.gob.bo/auth/realms/vpep/protocol/openid-connect/token",

  TOKAPUBACKENDGENERAL: "https://testback1.vicepresidencia.gob.bo/",
  TOKAPUBACKENCORRESPO: "http://localhost:8082/",
  TOKAPUBACKENPOAPRES: "http://localhost:8083/",
  TOKAPUBACKENPASAJVIAT: "http://localhost:8084/",
  lang: {
    "dayNames": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    "dayNamesShort": ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    "dayNamesMin": ["D", "L", "M", "X", "J", "V", "S"],
    "monthNames": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    "monthNamesShort": ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    "today": "Hoy",
    "clear": "Borrar",
    "accept": "Si",
    "reject": "No",
    "choose": "Eligir",
    "upload": "Subir",
    "cancel": "Cancel",
    "weekHeader": "Wk",
    "apply": "Aplicar",
    "emptyMessage": 'No se encontro resultados',
    "emptyFilterMessage": 'No se encontro resultados'
  }
};