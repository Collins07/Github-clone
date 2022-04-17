import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, count, retry } from 'rxjs/operators';
import { CLIENT_ID, CLIENT_SECRET } from '../GithubCred';

@Injectable({
  providedIn: 'root'
})
export class GithubServicesService {

  constructor(private httpClient: HttpClient) { }

  //for github profiles
  public getProfile(searchQuery: any):Observable<any>{
    let dataURL = `https://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<any>(dataURL).pipe(retry(),);
  }


  //for github repos
  public getRepos(searchQuery: any):Observable<any[]>{
    let dataURL = `https://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<any[]>(dataURL).pipe(retry(),);
  }

  // public handleErrors(errors: HttpErrorResponse){
  //   let errorMessage:string;
  //   if(error.error instanceof ErrorEvent){
  //     //clientside error
  //     errorMessage= `MESSAGE: ${error.error.message}`;
  //   }
  //   else {
  //     errorMessage= `STATUS: ${error.status} MESSAGE: ${error.message}`;
  //   }
  //   return throwError(errorMessage);
  // }

}
// function count1(count1: any): import("rxjs").OperatorFunction<Object, Object> {
//   throw new Error('Function not implemented.');
// }

