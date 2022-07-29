import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { User } from 'src/app/services/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // users: User[] = [];
  use: any = [];

  searchUser: string = '';
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
  }

  getUser(): void {
    this.use = [];
    this.githubService.getGithubUser(this.searchUser).subscribe((data) => {
      this.use.push(data) ;
    });

  }
}
