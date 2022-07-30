import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() user: any;
  repos: any = [];
  star: any;
  showRepo: Boolean = false;

  constructor(private githubService: GithubService, private router: Router) {}

  ngOnInit(): void {
    this.getRepo();
  }

  getRepo(): void {
    this.githubService.getGithubRepo(this.user.login).subscribe((data) => {
      this.repos = data;
      console.log('ESTA AQUIIII', this.repos);
      this.star = this.repos.reduce(
        (soma: any, atual: any) => soma + atual.stargazers_count, 0);
    });
  }
  goToRepo() {
    this.showRepo = !this.showRepo;
  }

}
