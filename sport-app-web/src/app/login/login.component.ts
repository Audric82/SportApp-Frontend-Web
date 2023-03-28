import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionLoginService } from '../services/session-login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  wrongCredentials = false;

  constructor(
    private sessionLogin: SessionLoginService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() : void {
  }

  login() {
    this.wrongCredentials = false;
    console.log(this.username);
    console.log(this.password);
    this.sessionLogin.login(this.username, this.password).subscribe({
      next: (res) => {
        this.router.navigate(['/home']);
        this.toastr.success("Connexion success");
        console.log("true")
      },
      error: (err) => { 
        this.wrongCredentials = true;
        this.toastr.error("Connexion failed");
      }
    })
      
      
      
      
      
      
      
      /*result => {
      this.router.navigate(['/home']);
      this.toastr.success("Connexion success");
    }, error => {
      this.wrongCredentials = true;
      this.toastr.error("Connexion failed");
    })*/
  }
}
