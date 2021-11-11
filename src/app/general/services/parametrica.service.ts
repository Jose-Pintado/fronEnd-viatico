import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ParametricaService {

  constructor(private http: HttpClient) { }//

  getParametricaGenerico(param: string,data:any): Observable<any> {
    let url = environment.TOKAPUBACKENDGENERAL + 'api/v1/param/gen/'+param+'?filtro='+data.filtro+'&ignorar='+data.ignorar;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getUsuarios(data:string):Observable<any>{
    let url = environment.TOKAPUBACKENDGENERAL + 'api/v1/param/usuarios?filtro='+data;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  //
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
