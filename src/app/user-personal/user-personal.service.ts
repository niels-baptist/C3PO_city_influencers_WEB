import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPersonal } from './user-personal';


@Injectable({
  providedIn: 'root'
})
export class UserPersonalService {
  rooturl: string =  'http://localhost:8053/';

//   getUsers(): Observable<UserPersonal[]> {
//     return this.httpClient.get<UserPersonal[]>(this.rooturl + 'users');
//   }

//   deleteUser(id: number): Observable<UserPersonal> {
//     return this.httpClient.delete<UserPersonal>('http://localhost:3000/articles/' + id);
//   }

//   getUserById(id: number): Observable<UserPersonal> {
//     return this.httpClient.get<UserPersonal>('http://localhost:3000/articles/' + id);
//   }

// putArticle(id: number, article: UserPersonal): Observable<UserPersonal> {
//   let headers = new HttpHeaders();
//   headers = headers.set('Content-Type', 'application/json; charset=utf-8');

//   return this.httpClient.put<UserPersonal>("http://localhost:3000/articles/" + id, article, {headers: headers});
// }

// publishArticle(id: number): Observable<UserPersonal> {
//   return this.getArticleById(id).pipe(
//           switchMap(article => {
//             article.statusId = StatusEnum.PUBLISHED;
//             return this.putArticle(id, article);
//           })
//   );

// }



  constructor(private httpClient: HttpClient) { }
  //rooturl: string = 'http://java-rest-api-c3po.westeurope.cloudapp.azure.com:8080/api/';
    getPersonalUsers(): Observable<UserPersonal[]> {
      return this.httpClient.get<UserPersonal[]>(this.rooturl + 'users');
    }
}



