export const environment = {
  production: false,
   //cors bakend
   OAUTH2OPENID: [
    'https://testback1.vicepresidencia.gob.bo/',
    'https://testback2.vicepresidencia.gob.bo/',
    'https://testback3.vicepresidencia.gob.bo/'
  ],
  //REALM
  OAUTH2USER: 'vpep',
  //cambiar realm para acceso
  OAUTH2SERVER: 'https://testauth.vicepresidencia.gob.bo/auth/realms/vpep',
  OAUTH2CLIENTID: 'tokapu-cli',
  OAUTH2SERVICE: "https://testauth.vicepresidencia.gob.bo/auth/realms/vpep/protocol/openid-connect/token",

  TOKAPUBACKENDGENERAL: "https://testback1.vicepresidencia.gob.bo/",
  TOKAPUBACKENCORRESPO: "https://testback2.vicepresidencia.gob.bo/",
  TOKAPUBACKENPOAPRES: "https://testback3.vicepresidencia.gob.bo/",
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