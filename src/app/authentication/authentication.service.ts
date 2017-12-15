import { Headers, Http, Response } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService implements CanActivate, OnInit {
  token: string;
  users: User[];

  status: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  constructor(private http: Http, private router: Router) {
      
  }

  signIn(username: string, password: string) {
      this.http.get('https://jsonplaceholder.typicode.com/users')
          .subscribe(
          response => {
              // console.log("got response");
              const data = response.json();
              // console.log(data);
              this.users = data;
              for (let user of this.users) {
                  // console.log(username + ' ' + user.username + ' ' + password + ' ' + user.email);
                  if (user.username == username && user.email == password) {
                      // console.log("User " + username + " logged in with token " + this.token );
                      this.token = user.name;
                      this.router.navigate(['/']);
                      this.status.next(true);
                      return true;
                  }
              }
              return false;
          }
          );


  }

  isAuthenticated() {
      return this.token != null;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.token != null;
  }

  signOut() {
      this.token = null;
      this.status.next(false);
      this.router.navigate(['/']);
  }

  isUsernameAvailable(username: string) {   

    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(
    response => {       
        const data = response.json();
        for (let user of data) {
            if (user.username == username) {
                return false;
            }
        }
        return true;
    });
    
      
  }

  ngOnInit() {
  }

}
