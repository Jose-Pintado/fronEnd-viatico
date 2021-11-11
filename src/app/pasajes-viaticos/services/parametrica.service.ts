import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametricaService {
  constructor(private http: HttpClient) { }//

  getParametricaGenerico(param: string,data:any): Observable<any> {
    let url = environment.TOKAPUBACKENPASAJVIAT + 'api/v1/param/'+param+'?filtro='+data.filtro+'&ignorar='+data.ignorar+'id=77';
    console.log(url);
    return this.http.get(url).pipe(
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
