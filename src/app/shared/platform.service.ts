import { Platform } from './platform';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(private httpClient: HttpClient) { }
  rooturl: string = 'http://java-rest-api-c3po.westeurope.cloudapp.azure.com:8080/api/';
  getPlatforms(): Observable<Platform[]> {
    return this.httpClient.get<Platform[]>(this.rooturl + 'platforms');
  }
}
