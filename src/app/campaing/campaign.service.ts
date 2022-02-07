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
    return this.httpClient.get<Campaign[]>("https://c3poapi.azurewebsites.net/campaigns");
  }

  getCampaignById(id: number): Observable<Campaign> {
    return this.httpClient.get<Campaign>("https://c3poapi.azurewebsites.net/campaigns/" + id);
  }

  postCampaign(campaign: Campaign): Observable<Campaign> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log(campaign);
    return this.httpClient.post<Campaign>("https://c3poapi.azurewebsites.net/campaigns/campaignForm", campaign);
  }

  putCampaign(campaign: Campaign): Observable<Campaign> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.put<Campaign>("https://c3poapi.azurewebsites.net/campaigns/campaignForm", campaign);
  }

  deleteCampaign(id: number): Observable<Campaign> {
    return this.httpClient.delete<Campaign>("https://c3poapi.azurewebsites.net/campaigns/" + id);
  }
}
