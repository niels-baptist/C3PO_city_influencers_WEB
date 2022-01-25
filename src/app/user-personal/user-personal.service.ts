import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPersonal } from './user-personal';


@Injectable({
  providedIn: 'root'
})
export class UserPersonalService {

  constructor(private httpClient: HttpClient) { }
  rooturl: string =  'http://localhost:8053/';
  // rooturl: string = 'http://java-rest-api-c3po.westeurope.cloudapp.azure.com:8080/api/';
  getPersonalUsers(): Observable<UserPersonal[]> {
    return this.httpClient.get<UserPersonal[]>(this.rooturl + 'users');

}}
