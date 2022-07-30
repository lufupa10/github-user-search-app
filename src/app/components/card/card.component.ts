import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';
import { Repo } from 'src/app/services/types/Repo';
import { Stars } from 'src/app/services/types/Stars';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() user: any;
  repos: Repo[] = [];
  stars: Stars[] = [];
  showRepo: Boolean = false;
  order: any;

  constructor(private githubService: GithubService, private router: Router) {}

  ngOnInit(): void {
    this.getRepo();
  }

  getRepo(): void {
    this.githubService.getGithubRepo(this.user.login).subscribe((data) => {
      this.repos = data;
      this.stars = this.repos.reduce(
        (sumOfStars: any, current: any) => sumOfStars + current.stargazers_count, 0);
    });
  }

  sortListGrowing() {
    this.order = this.repos.sort((a: any, b: any)=> b.stargazers_count - a.stargazers_count);
    this.repos = this.order;
  }

  sortListDescending() {
    this.order = this.repos.sort((a:any, b:any)=> a.stargazers_count - b.stargazers_count);
    this.repos = this.order;
  }

  goToRepo() {
    this.showRepo = !this.showRepo;
  }

}
