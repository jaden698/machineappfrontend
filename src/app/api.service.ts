import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  addMachine(body:any){
    console.log(body)
    return this._http.post('http://localhost:3000/machines/add', body
    ).toPromise().then((response:any)=>{
      console.log(response)
    })
  }

  getMachines():Observable<any>{
    return this._http.get<any[]>('http://localhost:3000/machines/ret').pipe(
      tap(_ => console.log('fetched trending')),
      catchError(this.handleError<any[]>('getFavoutites', []))
    );
      
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
