import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Influencer} from './influencer';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {
  constructor(private httpClient: HttpClient) { }
  azure:string="https://c3poapi.azurewebsites.net/";

  getInfluencers(): Observable<Influencer[]> {
    return this.httpClient.get<Influencer[]>("https://c3poapi.azurewebsites.net/influencers");
  }

  getInfluencerById(id: number): Observable<Influencer> {
    return this.httpClient.get<Influencer>(this.azure + '/influencers/' + id);
  }

  getInfluencerByName(name: string): Observable<Influencer[]> {
    return this.httpClient.get<Influencer[]>(this.azure + '/influencers/' + name);
  }

  getInfluencerByUsername(userName: string): Observable<Influencer[]> {
    return this.httpClient.get<Influencer[]>(this.azure + '/influencers/' + userName);
  }

  getInfluencerByGender(gender: string): Observable<Influencer> {
    return this.httpClient.get<Influencer>(this.azure + + '/influencers/' + gender);
  }

  getInfluencerByDomain(domainId: number): Observable<Influencer> {
    return this.httpClient.get<Influencer>(this.azure + '/influencers/' + domainId);
  }

  getInfluencerByLocation(locationId:number): Observable<Influencer[]> {
    return this.httpClient.get<Influencer[]>(this.azure + 'influencers/location/' + locationId);
  }
}
