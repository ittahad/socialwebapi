import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  getMyProfile(userId: any) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<any>(`http://localhost:3000/profile/${userId}`, null, httpOptions);
  }

}
