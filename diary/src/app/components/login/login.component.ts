import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  hide=true;
  email:string;
  password:string;

  constructor(
    private authservice:AuthService,
    private flashmessage:NgFlashMessageService,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
  }

  loguser(){
    const user={
      email:this.email,
      password:this.password
    }
    if(user.email.length==0 || user.password.length==0){
      this.toastr.info('You Did Not Add Anything','Please Fill All Feilds!');
      this.router.navigate(['./login']);
    }
    else{
      this.authservice.loguser(user).subscribe(res=>{
        if(res.state){
          this.toastr.success('Successfully logged In',res.msg);
          this.authservice.storeuser(res.token);
          this.router.navigate(['./profile']);
        }
        else{
          this.toastr.warning('Enter Your Password Again',res.msg);
          this.router.navigate(['./login']);
        }
      });
    }
  }
  clear(){

  }
}
