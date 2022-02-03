import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Campaign } from './campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private httpClient: HttpClient) { }

  getCampaigns(): Observable<Campaign[]> {
    return this.httpClient.get<Campaign[]>("http://c3poapi.azurewebsites.net/campaigns");
  }

  getCampaignById(id: number): Observable<Campaign> {
    return this.httpClient.get<Campaign>("http://c3poapi.azurewebsites.net/campaigns/" + id);
  }

  postCampaign(campaign: Campaign): Observable<Campaign> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Campaign>("http://c3poapi.azurewebsites.net/campaigns", campaign);
  }

  putCampaign(campaign: Campaign): Observable<Campaign> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Campaign>("http://c3poapi.azurewebsites.net/campaigns", campaign);
  }

  deleteCampaign(id: number): Observable<Campaign> {
    return this.httpClient.delete<Campaign>("http://c3poapi.azurewebsites.net/campaigns/" + id);
  }
}
