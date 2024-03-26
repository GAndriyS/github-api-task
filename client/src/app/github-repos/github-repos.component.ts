import { Component } from '@angular/core';
import { GithubReposService } from './github-repos.service';
import { GithubRepository, GithubSearchResponse } from './models';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss'],
  standalone: true,
  imports: [
    MatProgressSpinnerModule
  ],
})
export class GithubReposComponent {
  githubSearchResponse: GithubSearchResponse | null = null;
  githubRepositories: GithubRepository[] = [];

  constructor(
    private _githubReposService: GithubReposService
  ) {
    this._githubReposService.getRepos().subscribe(data => {
      this.githubSearchResponse = data;
      this.githubRepositories = data.items;
    });
  }
}
