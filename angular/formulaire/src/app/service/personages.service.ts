import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipersonage } from '../model/personage';

interface IToken {
  error: string,
  data: string // Token
}

@Injectable({
  providedIn: 'root'
})
export class PersonagesService {

  token: string = '';

  constructor(
    private http_client: HttpClient
  ) { }

  /*
  getSecret(): Observable<ISecret> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
         Authorization: this.token
      })
    };

    return this.http_client.get<any>(environment.serveur + 'secret', httpOptions)
  }
  */

  creeSession(username: string, password: string): void {
    this.http_client.post<any>(environment.serveur + 'token',
    {
      username: username,
      password: password
    }
    ).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.token = data.data;
        },
        error: (error) => {
          console.log(error)
        }
      }
    )
  }

  addPersonage(personage: Ipersonage): void {
    // Push to the web please
  }
}
