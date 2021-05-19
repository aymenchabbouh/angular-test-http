import { Injectable } from '@angular/core';
import { HttpXhrBackend, HttpHeaders, HttpRequest, HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators/tap';
import { Mynew } from 'src/app/_models/mynew';
const httpOptions = {
  headers: new HttpHeaders({
   // 'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin': 'http://localhost:4200', 
    //'Access-Control-Allow-Methods': 'GET',
    //'Access-Control-Allow-Origin': '*', 
    //'Access-Control-Allow-Credentials':  'true'  ,
     //'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
   //  responseType: 'xml' ,
    //'Accept-Encoding': 'gzip, deflate, br',
    //'Accept-Language': 'en-US, en; q=0.9, fr-FR; q=0.8, fr; q=0.7',
    //'Cache-Control': 'max-age=0',
    //'Connection': 'keep-alive',
  }),

};

@Injectable({
  providedIn: 'root'
})

export class MagicRequestService {

  constructor(private httpXhrBackend: HttpXhrBackend, private httpClient: HttpClient)  { }
  
  public getUrl(url: string): Observable<any>{
    let httpRequest: HttpRequest<any>= new HttpRequest("GET",url,httpOptions);
    return this.httpXhrBackend.handle(httpRequest);
    /*, { responseType: 'text' })
      .pipe(
      tap( // Log the result or error
        data => console.log(url, data),
        error => console.error(url, error)
      )
      );*/

  }
  public getUrl2(url: string) {
  
    return this.httpClient.get<Mynew[]>(url,httpOptions)    
      .pipe(     
        catchError(this.handleError)
      
      );

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
