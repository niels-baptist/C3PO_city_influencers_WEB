import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
import {UserResponse} from './userResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  getUser(): User | null {
    if (this.isLoggedIn()){
      return { gebruikerId : parseInt(localStorage.getItem('gebruikerId') ?? '0'),
        locatieId: parseInt(localStorage.getItem('locatieId') ?? '0'),
        email: localStorage.getItem('email') ?? '',
        password: '',
        voornaam: localStorage.getItem('voornaam') ?? '',
        naam: localStorage.getItem('naam') ?? '',
        geboortedatum: localStorage.getItem('geboortedatum') ?? '',
        token: this.getToken()  };
    } else {
      return null;
    }
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  authenticate(user: User): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>('http://localhost:3000/login', user);
  }

  register(user: User): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>('http://localhost:3000/register', user);
  }
}
