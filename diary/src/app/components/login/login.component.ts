import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide=true;
  email:string;
  password:string;

  constructor(
    private authservice:AuthService,
    private flashmessage:NgFlashMessageService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  loguser(){
    const user={
      email:this.email,
      password:this.password
    }
    if(user.email==undefined || user.password==undefined){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill All Feilds!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
      this.router.navigate(['./login']);
    }
    else{
      this.authservice.loguser(user).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.authservice.storeuser(res.token);
          this.router.navigate(['./profile']);
        }
        else{
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'warning'
          });
          this.router.navigate(['./login']);
        }
      });
    }
  }

}
