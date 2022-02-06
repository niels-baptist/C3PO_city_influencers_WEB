import { Platform } from './../shared/platform';
import { Domain } from './domain';
import { getPlatform, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private httpClient: HttpClient) { }
  rooturl: string = 'https://c3poapi.azurewebsites.net/';
  getPlatforms(): Observable<Platform[]> {return this.httpClient.get<Platform[]>(this.rooturl + 'platforms');}
  getDomains(): Observable<Domain[]> {return this.httpClient.get<Domain[]>(this.rooturl + 'domains');}
}
