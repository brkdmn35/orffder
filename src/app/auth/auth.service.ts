import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { HttpClient } from '@angular/common/http';

(window as any).global = window;

@Injectable()
export class AuthService {
  // Create Auth0 web auth instance
  auth0 = new auth0.WebAuth({
    responseType: 'token',
    clientID: environment.auth.clientID,
    domain: environment.auth.domain,
    redirectUri: environment.auth.redirect,
    audience: environment.auth.audience,
    scope: environment.auth.scope
  });
  // Store authentication data
  expiresAt: number;
  userProfile: any;
  accessToken: string;
  authenticated: boolean;

  constructor(private router: Router, public localStorage: LocalStorageService, public http: HttpClient) {
    this.getAccessToken();
  }

  login() {
    // Auth0 authorize request
    this.auth0.authorize();
  }

  handleLoginCallback() {
    // When Auth0 hash parsed, get profile
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.getUserInfo(authResult);
      } else if (err) {
        console.error(`Error: ${err.error}`);
      }
      this.router.navigate(['/']);
    });
  }

  getAccessToken() {
    let token = this.localStorage.get('token');
    if(token){
      this.http.get<any>('token/token.php').subscribe(res=>{
        if(res.status){
          this.expiresAt = Math.floor(new Date().getTime()/1000.0) + 5400;
          this.userProfile = this.localStorage.get('user');
          this.authenticated = true;
        }
      })
    }else{
      this.localStorage.remove('token','user');
      this.authenticated = false;
    }
  }

  getUserInfo(authResult) {
    // Use access token to retrieve user's profile and set session

  }

  setSession(token,profile) {
    // Save authentication data and update login status subject
    this.expiresAt = Math.floor(new Date().getTime()/1000.0) + 5400;
    this.accessToken = token;
    this.userProfile = profile;
    this.authenticated = true;
  }

  logout() {
    // Log out of Auth0 session
    // Ensure that returnTo URL is specified in Auth0
    // Application settings for Allowed Logout URLs
    this.router.navigate(['/']);
    this.localStorage.remove('token','user');
    this.authenticated = false;
  }

  get isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally
    return Math.floor(new Date().getTime()/1000.0) < this.expiresAt && this.authenticated;
  }

}