import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authservice:AuthService,
    private flashmessage:NgFlashMessageService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.authservice.logoutuser();
    this.flashmessage.showFlashMessage({
      messages: ["Good Bye!"],
      dismissible: false,
      timeout: 2000,
      type: 'success'
    });
  }

}
