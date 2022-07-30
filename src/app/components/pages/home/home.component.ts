import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { User } from 'src/app/services/types/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  message: string = "";

  searchUser: string = '';
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
  }

  getUser(): void {
    this.users = [];
    this.message = "";
    this.githubService.getGithubUser(this.searchUser).subscribe({
      next: (data: any) => {
        this.users.push(data) ;
      },
      error: (error) => {
        if (error.status === 404 ) {
          this.message = `Não encontramos nenhum úsuario correspondente a '${this.searchUser}'`
        }
      },
    })
  }
}
