import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Influencer} from './influencer';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  constructor(private httpClient: HttpClient) { }

  getInfluencers(): Observable<Influencer[]> {
    // return this.httpClient.get<Influencer[]>("http://localhost:8080/influencers");
    return this.httpClient.get<Influencer[]>("https://c3poapi.azurewebsites.net/influencers");

  }

  getInfluencerById(id: number): Observable<Influencer> {
    // return this.httpClient.get<Influencer>("http://localhost:8080/influencers/" + id);
    return this.httpClient.get<Influencer>("https://c3poapi.azurewebsites.net/influencers/" + id);
  }

  getInfluencerByName(name: string): Observable<Influencer[]> {
    // return this.httpClient.get<Influencer>("http://localhost:8080/influencers/" + id);
    return this.httpClient.get<Influencer[]>("https://c3poapi.azurewebsites.net/influencers/" + name);
  }

  getInfluencerByUsername(userName: string): Observable<Influencer[]> {
    // return this.httpClient.get<Influencer>("http://localhost:8080/influencers/" + id);
    return this.httpClient.get<Influencer[]>("https://c3poapi.azurewebsites.net/influencers/username/" + userName);
  }

  getInfluencerByGender(gender: string): Observable<Influencer> {
    // return this.httpClient.get<Influencer>("http://localhost:8080/influencers/" + id);
    return this.httpClient.get<Influencer>("https://c3poapi.azurewebsites.net/influencers/" + gender);
  }

  getInfluencerByDomain(domainId: number): Observable<Influencer> {
    // return this.httpClient.get<Influencer>("http://localhost:8080/influencers/" + id);
    return this.httpClient.get<Influencer>("https://c3poapi.azurewebsites.net/influencers/domain/" + domainId);
  }
  // postStatus(category: Status): Observable<Status> {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json; charset=utf-8');

  //   return this.httpClient.post<Status>("http://localhost:3000/statuses", category, {headers: headers});
  // }

  // putStatus(id:number, category: Status): Observable<Status> {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json; charset=utf-8');

  //   return this.httpClient.put<Status>("http://localhost:3000/statuses/" + id, category, {headers: headers});
  // }

  // deleteStatus(id: number): Observable<Status> {
  //   return this.httpClient.delete<Status>("http://localhost:3000/statuses/" + id);
  // }
}
