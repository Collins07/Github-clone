import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CLIENT_ID, CLIENT_SECRET } from '../GithubCred';

@Injectable({
  providedIn: 'root'
})
export class GithubServicesService {

  constructor(private httpClient: HttpClient) { }

  //for github profiles
  public getProfile(searchQuery: any){
    let dataURL = `https://api.github.com/users/${searchQuery}? client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  }


  //for github repos
  //

}
