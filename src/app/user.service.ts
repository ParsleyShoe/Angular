import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.class';
import { Observable } from 'rxjs';

const baseurl:string = "http://localhost:55555/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  list():Observable<User[]> {
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }

  constructor(
    private http: HttpClient
  ) { }
}
