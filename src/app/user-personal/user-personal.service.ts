import { User } from './../admin/user/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPersonal } from './user-personal';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UserPersonalService {
  rooturl: string =  'http://localhost:8080/';

  getUsers(): Observable<UserPersonal[]> {

    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<UserPersonal[]>(this.rooturl + 'api/users');
  }

  deleteUser(userId: number): Observable<UserPersonal> {

    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'DELETE')
    .append('Access-Control-Allow-Origin', '*');
    return this.httpClient.delete<UserPersonal>(this.rooturl + 'api/users/' + userId, {headers: headers});
  }

  getUserById(userId: number): Observable<UserPersonal> {

    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<UserPersonal>(this.rooturl + 'api/users/' + userId, {headers: headers});
  }

  postUser(user: UserPersonal): Observable<UserPersonal> {

    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'POST')
    .append('Access-Control-Allow-Origin', '*');
    return this.httpClient.post<UserPersonal>(this.rooturl + 'api/users/register', user, {headers: headers});
  }

  putUser(userId: number, user: UserPersonal): Observable<UserPersonal> {

    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'PUT')
    .append('Access-Control-Allow-Origin', '*');

  return this.httpClient.put<UserPersonal>(this.rooturl + 'api/users' + userId, user, {headers: headers});}

  publishUser(id: number): Observable<UserPersonal> {
    return this.getUserById(id).pipe(
        switchMap(user => {
          return this.putUser(id, user);
        })
    );
  }

  constructor(private httpClient: HttpClient) { }
  //rooturl: string = 'http://java-rest-api-c3po.westeurope.cloudapp.azure.com:8080/api/';
    getPersonalUsers(): Observable<UserPersonal[]> {
      return this.httpClient.get<UserPersonal[]>(this.rooturl + 'api/users');
    }

}



