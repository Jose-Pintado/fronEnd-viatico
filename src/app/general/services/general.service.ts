import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
//
@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }
  //servicios
  getMenu(): Observable<any> {
    let url = environment.TOKAPUBACKENDGENERAL;
    return this.http.get(url + 'api/v1/general/menu').pipe(
      catchError(this.handleError)
    );
  }
  //funciones
  columnasTabla(dt:any):string{
    let col=dt.columnas
    if(col.length!=0){
      let lista=[];
      for (const elemento of col) {
        lista.push(elemento.campo);
      }
      return lista.join('|');
    }
    return '';
  }
  valorComulnasComboTabla(valor:string,dt:any):any{
    let filtro_lista=dt.filtroCampo;
    if(filtro_lista.length!=0){
      for (const elemento of filtro_lista) {
        if(elemento.nombre==valor){
          return elemento.valor?.codigo !=undefined?elemento.valor?.codigo :'';
        }
      }
    }
    return '';
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(error);
  }
}
