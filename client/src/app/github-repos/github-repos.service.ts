import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubSearchResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {
  constructor(private _httpClient: HttpClient) {}

  getRepos() {
    return this._httpClient.get<GithubSearchResponse>('http://localhost:3000/github/top-rated');
  }
}
