import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { Repo } from './Repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = " https://api.github.com/users/"
  repo: any = "/repos"

  constructor(private http: HttpClient) { }

  getGithubUser(value: any):Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}${value}`);

  }

  getGithubRepo(value: any):Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.apiUrl}${value}`+ this.repo);
  }
}
