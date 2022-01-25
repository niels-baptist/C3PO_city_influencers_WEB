import { Domain } from './domain';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private httpClient: HttpClient) { }
  rooturl: string = 'http://java-rest-api-c3po.westeurope.cloudapp.azure.com:8080/api/';
  getDomains(): Observable<Domain[]> {
    return this.httpClient.get<Domain[]>(this.rooturl + 'domains/');
  }
}
