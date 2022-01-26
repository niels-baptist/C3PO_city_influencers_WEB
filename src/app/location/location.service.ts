import { Location } from './location';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }
  // rooturl: string = 'http://java-rest-api-c3po.westeurope.cloudapp.azure.com:8080/api/';
  rooturl: string = 'http://localhost:8080/';
  getLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(this.rooturl + 'locations/');
  }
}
