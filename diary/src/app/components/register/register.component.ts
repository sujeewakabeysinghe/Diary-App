import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages'; //npm i ng-flash-messages
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide=true;
  userName:string;
  email:string;
  password:string;

  constructor(
    private authservice:AuthService,
    private flashmessage:NgFlashMessageService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  registeruser(){
    const user={
      userName:this.userName,
      email:this.email,
      password:this.password
    }
    if(user.userName==undefined || user.email==undefined || user.password==undefined){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill All Feilds!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
      this.router.navigate(['./register']);
    }
    else{
      this.authservice.registeruser(user).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.router.navigate(['./login']);
        }
        else{
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'warning'
          });
          this.router.navigate(['./register']);
        }
      });
    }
  }

}
