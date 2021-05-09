import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private httpClient: HttpClient) { }

  getFriends(payload: any) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<any>("http://localhost:3000/friend/getFriends", payload, httpOptions);
  }

  getNotFriends(payload: any) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<any>("http://localhost:3000/friend/getNotFriends", payload, httpOptions);
  }

  addFriend(payload: any) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<any>("http://localhost:3000/friend/add", payload, httpOptions);
  }

  removeFriend(payload: any) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<any>("http://localhost:3000/friend/remove", payload, httpOptions);
  }
}
