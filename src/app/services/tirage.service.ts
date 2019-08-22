import { HttpClient, HttpHeaders, HttpErrorResponse   } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, map  } from 'rxjs/operators';
import { EnvService } from './env.service';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TirageService {

  constructor(
    private http: HttpClient,
    private env:EnvService,
    private _platform:Platform
  ) { }

  gettirage() {
    //console.log(this.env.basebath+'action=gettirage&user='+localStorage.getItem('id'))
    return this.http.get<any>(this.env.basebath+'action=gettirage&user='+localStorage.getItem('id'))
      .pipe(
        tap(),
        catchError(this.handleError('tirage', []))
      );
  }
  executetirage() {
    return this.http.get<any>(this.env.basebath+'action=excutetirage&user='+localStorage.getItem('id'));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
