import { HttpClient, HttpHeaders, HttpErrorResponse   } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, map  } from 'rxjs/operators';
import { EnvService } from './env.service';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  
  constructor(
    private http: HttpClient,
    private env:EnvService,
    private _platform:Platform
  ) { 
    
  }
  login(data: any) {
    return this.http.get<any>(this.env.basebath+'action=login&email='+data['username']+'&password='+data['password'])
      .pipe(
        tap(_ => this.isLoggedIn = true),
        catchError(this.handleError('login', []))
      );
  }
  islogued(){
    if (localStorage.getItem("id") === null || localStorage.getItem("id")=='') {
      return false;
    }else{
      return true;
    }
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  private log(message: string) {
    console.log(message);
  }
  register(fName: String, phone: String, city: String) {
    //console.log(this.env.basebath+'action=subscribe&name='+fName+'&phone='+phone+'&city='+city+'&bonnus='+localStorage.getItem("bonnus")+'&user='+localStorage.getItem("id"))
    return this.http.get<any>(this.env.basebath+'action=subscribe&name='+fName+'&phone='+phone+'&city='+city+'&bonnus='+localStorage.getItem("bonnus")+'&user='+localStorage.getItem("id")+'&parent='+localStorage.getItem("parent"))
      .pipe(
        tap(_ => this.isLoggedIn = true),
        catchError(this.handleError('register', []))
      );
  }
}