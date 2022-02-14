import { Campaignstatus } from './campaignstatus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignstatusService {
  azure: string =  'https://c3poapi.azurewebsites.net/';

  constructor(private httpClient: HttpClient) {}

  getStatuses(): Observable<Campaignstatus[]> {
    return this.httpClient.get<Campaignstatus[]>(this.azure + 'campaignstatuses');
  }
}
