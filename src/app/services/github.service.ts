import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './types/User';
import { Repo } from './types/Repo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = environment.URL_BASE;

  constructor(private http: HttpClient) { }

  getGithubUser(value: any):Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}${value}`);

  }

  getGithubRepo(value: any):Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.apiUrl}${value}`+ "/repos");
  }
}
