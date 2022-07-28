import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { User } from 'src/app/services/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = []
  searchUser: any; 
  constructor( private githubService : GithubService) {
    this.getUser();
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.getUser();
    }, 300);
  }

  getUser(): void {
  this.githubService.getGithubUser(this.searchUser).subscribe((user)=>(this.users = user));
    console.log('O QUE VEMMMM', this.users);
  }

}
