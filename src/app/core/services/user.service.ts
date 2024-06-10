import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user:any): Observable<any>{
    return this.http.post(`${environment.apiUrl}auth/login`, user)
  }

  register(user:any): Observable<any>{
    return this.http.post(`${environment.apiUrl}auth/register`, user)
  }

  //TODO Insertar id de ususario para traer los datos al perfil
  getUserData(token:any): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(environment.apiUrl+'user/1', { headers })
  }

}
