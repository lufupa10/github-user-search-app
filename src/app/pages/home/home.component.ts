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
  spinner: boolean = false;

  searchUser: string = '';
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
  }

  getUser(): void {
    this.users = [];
    this.message = "";
    this.spinner = true;

    this.githubService.getGithubUser(this.searchUser).subscribe({
      next: (data: any) => {
        setTimeout(()=> {
          this.users.push(data) ;
          this.spinner = false;
        }, 2000)
      },
      error: (error) => {
        if (error.status === 404 ) {
          this.message = `Não encontramos nenhum úsuario correspondente a '${this.searchUser}'`
          this.spinner = false;
        }
      },
    })
  }
}
