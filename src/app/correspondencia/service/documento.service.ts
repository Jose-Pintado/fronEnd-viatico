import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
//
@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  constructor(private http: HttpClient) { }

  getListaDocumentos(data: any): Observable<any> {
    let url = environment.TOKAPUBACKENCORRESPO + 'api/v1/documentos?filtro_global=' + data.filtro_global + '&inicio=' + data.inicio + '&cantidad=' + data.cantidad + '&tipo=' + data.tipo + '&estado=' + data.estado + '&unidad_organizacional=' + data.unidad_organizacional + '&columnas=' + data.columnas;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  getDocumentosId(id: string): Observable<any> {
    let url = environment.TOKAPUBACKENCORRESPO + 'api/v1/documentos/' + id;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  deleteDocumentos(id: string): Observable<any> {
    let url = environment.TOKAPUBACKENCORRESPO + 'api/v1/documentos/' + id;
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
