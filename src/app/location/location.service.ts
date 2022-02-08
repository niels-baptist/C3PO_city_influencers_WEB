import { Location } from './location';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }
  rooturl: string = 'https://c3poapi.azurewebsites.net/';
  getLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(this.rooturl + 'locations');
  }

  getLocationById(id:number): Observable<Location> {
    return this.httpClient.get<Location>(this.rooturl + 'locations/' + id);
  }
}
