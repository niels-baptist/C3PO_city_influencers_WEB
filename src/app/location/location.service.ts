import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>("http://localhost:8053/locations/");
  }

  getLocationById(id: number): Observable<Location> {
    return this.httpClient.get<Location>("http://localhost:8053/locations/" + id);
  }

  postLocation(location: Location): Observable<Location> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Location>("http://localhost:8053/locations", location, {headers: headers});
  }

  // putLocation(id:number, category: Status): Observable<Location> {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json; charset=utf-8');

  //   return this.httpClient.put<Location>("http://localhost:8053/locations/" + id, category, {headers: headers});
  // }

  // deleteStatus(id: number): Observable<Location> {
  //   return this.httpClient.delete<Location>("http://localhost:8053/locations/" + id);
  // }
}
