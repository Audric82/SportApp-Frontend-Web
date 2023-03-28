import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionLoginService {

  LOGIN_URL = 'http://localhost:8080/login/';

  constructor(
    private httpClient: HttpClient
  ) { }

  login(_username: String, _password : String) {
      const loginData = new LoginData(_username, _password);

      return new Observable<boolean>((observer) => {

        this.httpClient.post(this.LOGIN_URL, loginData).subscribe( result => {
          observer.next(true);
          observer.complete();
        }, error => {
          observer.error(false);
          observer.complete();
        }) 
      })
  }
}

class LoginData {

  email: String;
  password: String;

  constructor(email: String, password: String) {
    this.email = email;
    this.password = password;
  }
}
