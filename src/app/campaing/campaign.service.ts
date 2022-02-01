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
    return this.httpClient.get<Campaign>("http://c3poapi.azurewebsites.net/campaigns" + id);
  }

  postCampaign(category: Campaign): Observable<Campaign> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Campaign>("http://c3poapi.azurewebsites.net/campaigns", category, {headers: headers});
  }

  putCampaign(id:number, category: Campaign): Observable<Campaign> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Campaign>("http://c3poapi.azurewebsites.net/campaigns" + id, category, {headers: headers});
  }

  deleteCampaign(id: number): Observable<Campaign> {
    return this.httpClient.delete<Campaign>("http://c3poapi.azurewebsites.net/campaigns" + id);
  }
}
