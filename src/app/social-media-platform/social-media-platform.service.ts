import { Injectable } from '@angular/core';
import { SocialMediaPlatform } from './social-media-platform';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaPlatformService {

  constructor(private httpClient: HttpClient) { }
  rooturl: string = 'https://c3poapi.azurewebsites.net/';
  getSocialMediaPlatforms(): Observable<SocialMediaPlatform[]> {
    return this.httpClient.get<SocialMediaPlatform[]>(this.rooturl + 'platforms');
  }
}
