import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(
    private auth: AuthService,
    private router: Router,
    private flashmessage:NgFlashMessageService
  ) { }

  canActivate() {
    if(this.auth.isloggedin()){
      return true;
    }
    else{
      this.flashmessage.showFlashMessage({
        messages: ['You Can\'t Go There!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
      this.router.navigate(['./home']);
      return false;
    }
  }

}
