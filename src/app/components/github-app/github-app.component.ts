import { Component, OnInit } from '@angular/core';
import { GithubServicesService } from 'src/app/services/github-services.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery!: string;
  public githubProfile: any;
  public githubRepos!: any[];

  constructor(private githubService: GithubServicesService) { }

  ngOnInit(): void {
  }

  public searchUser(){
    this.githubService.getProfile(this.githubUserQuery).subscribe((data) =>{
      this.githubProfile= data;

    });
    this.githubService.getRepos(this.githubUserQuery).subscribe((data) =>{
      this.githubRepos= data;

    });
    
  }

}

function next(next: any, arg1: (data: any) => void) {
  throw new Error('Function not implemented.');
}

