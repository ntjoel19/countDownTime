import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  //replace with your own apiUrl
  readonly apiUrl = `http://localhost:8088/api/v1/auth/signup`;
  constructor(private http: HttpClient) { }

  signup(firstname:string, lastname: string, email : string, password : string): Observable<any> { 
    return this.http.post(this.apiUrl, {firstname, lastname, email, password});
  }
}

