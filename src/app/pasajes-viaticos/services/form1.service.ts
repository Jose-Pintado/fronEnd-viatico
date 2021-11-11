import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Header } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class Form1Service {
 //_url='http://localhost:8084/api/v1/form1/0/10/77'
tableDatos$!: Observable<any>;
  constructor(private http: HttpClient) { }

  getForm1(){
   
    return this.http.get('http://localhost:8084/api/v1/form1/0/10/77');
  }
/*
getForm1(){
   
  let heades =new HttpHeaders()
  .set('Type-content', 'aplication/json')
  return this.http.get(this._url, {
    headers:heades
  })
}*/
  getListaDocumentos(data: any): Observable<any> {
    //let url = environment.TOKAPUBACKENPASAJVIAT + 'api/v1/documentos?filtro_global=' + data.filtro_global + '&inicio=' + data.inicio + '&cantidad=' + data.cantidad + '&tipo=' + data.tipo + '&estado=' + data.estado + '&unidad_organizacional=' + data.unidad_organizacional + '&columnas=' + data.columnas;
    let url = environment.TOKAPUBACKENPASAJVIAT + 'api/v1/form1?filtro=' + data.filtro_global + '&cantidad=' + data.cantidad + '&inicio=' + data.inicio + '&estado=' + data.estado + '&id=77';
    console.log (url)
    return this.http.get(url).pipe( 
           catchError(this.handleError));
  }
  getDocumentosId(id: string): Observable<any> {
    let url = environment.TOKAPUBACKENPASAJVIAT + 'api/v1/form1/' + id;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  deleteDocumentos(id: string): Observable<any> {
    let url = environment.TOKAPUBACKENPASAJVIAT + 'api/v1/form1/' + id;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(error);
  }
}
