import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  show:string;
  userId:string;
  date:string;
  today:Date=new Date();
  notes:string;
  day:any;
  contact:any;
  firstName:string;
  lastName:string;
  company:string;
  mobileNo:string;
  landPhoneNo:string;
  officeNo:string;
  email:string;
  website:string;
  address:string;
  note:string;

  constructor(
    private authservice:AuthService,
    private flashmessage:NgFlashMessageService,
    private router:Router
  ) { }

  ngOnInit() {
    this.authservice.getuser().subscribe(res=>{
      this.userId=res.user._id;
    });
    this.date=this.today.toISOString();
    this.date=this.date.slice(0,10);
    this.show="write"
  }

  write(){
    this.show="write";
  }
  writeday(){
    const day={
      userId:this.userId,
      date:this.date,
      notes:this.notes
    }
    if(day.userId==undefined || day.date==undefined || day.notes==undefined){
      this.flashmessage.showFlashMessage({
        messages: ['Please Write!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.writeday(day).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.clearday();
          this.read();
        }
        else{
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'warning'
          });
        }
      });
    }
  }
  clearday(){
    this.notes="";
  }

  read(){
    this.show="read";
    this.readday();
  }
  readday(){
    this.authservice.readday().subscribe(res=>{
      this.day=res.day;
    });
  }

  contacts(){
    this.show="contacts";
    this.readcontact();
  }
  readcontact(){
    this.authservice.readcontact().subscribe(res=>{
      this.contact=res.contact;
    });
  }
  createcontact(){
    this.show="createcontacts";
  }
  addcontact(){
    const contact={
      userId:this.userId,
      firstName:this.firstName,
      lastName:this.lastName,
      company:this.company,
      mobileNo:this.mobileNo,
      landPhoneNo:this.landPhoneNo,
      officeNo:this.officeNo,
      email:this.email,
      website:this.website,
      address:this.address,
      notes:this.note
    }
    if(contact.userId==undefined || contact.firstName==undefined){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Required Fields!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.createcontact(contact).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.clearcontact();
          this.contacts();
        }
        else{
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'warning'
          });
        }
      });
    }
  }
  clearcontact(){
    this.firstName="";
    this.lastName="";
    this.company="";
    this.mobileNo="";
    this.landPhoneNo="";
    this.officeNo="";
    this.email="";
    this.website="";
    this.address="";
    this.note="";
  }





  memo(){
    this.show="memo"
  }
  profile(){
    this.show="profile";
  }

}
