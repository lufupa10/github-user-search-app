import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = " https://api.github.com/users/"

  constructor(private http: HttpClient) { }

  getGithubUser(value: any):Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}${value}`);

  }
}
