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

  iconname=true;
  pickdate:string;
  show:string;
  userId:string;
  userName:string;
  userEmail:string;
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
  editedUserName:string;
  hasMemo:boolean;

  readMemo:any;

  mobileNoM:string;
  landPhoneNoM:string;
  officeNoM:string;
  addressM:string;
  officeAddressM:string;
  bloodGroupM:string;
  heightM:string;
  weightM:string;
  idNoM:string;
  licenceNoM:string;
  bankAccountNoM:string;
  passportNoM:string;
  notesM:string;

  constructor(
    private authservice:AuthService,
    private flashmessage:NgFlashMessageService,
    private router:Router
  ) { }

  ngOnInit() {
    this.authservice.getuser().subscribe(res=>{
      this.userId=res.user._id;
      this.userName=res.user.userName;
      this.userEmail=res.user.email;
      this.hasMemo=res.user.hasMemo;
    });
    this.date=this.today.toISOString();
    this.date=this.date.slice(0,10);
    this.show="write";
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
            messages: ['Please Fill Required Fields!'],
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
    if(this.hasMemo){
      this.readmemo();
    }
    else{
      this.show="memo";
    }
  }
  memocreate(){
    const memoCreate={
      userId:this.userId,
      mobileNoM:this.mobileNoM,
      landPhoneNoM:this.landPhoneNoM,
      officeNoM:this.officeNoM,
      addressM:this.addressM,
      officeAddressM:this.officeAddressM,
      bloodGroupM:this.bloodGroupM,
      heightM:this.heightM,
      weightM:this.weightM,
      idNoM:this.idNoM,
      licenceNoM:this.licenceNoM,
      bankAccountNoM:this.bankAccountNoM,
      passportNoM:this.passportNoM,
      notesM:this.notesM,
    }
    if(memoCreate.userId==undefined || memoCreate.mobileNoM==undefined || memoCreate.mobileNoM.length==0){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Required Fields!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.hasMemo=true;
      const memo={
        userId:this.userId,
        hasMemo:this.hasMemo
      }
      this.authservice.edithasmemo(memo).subscribe(res=>{
        if(res.state){
          this.authservice.creatememo(memoCreate).subscribe(res=>{
            if(res.state){
              this.flashmessage.showFlashMessage({
                messages: [res.msg],
                dismissible: false,
                timeout: 2000,
                type: 'success'
              });
              this.readmemo();
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
  readmemo(){
    this.show="readmemo";
    this.authservice.readmemo().subscribe(res=>{
      this.readMemo=res.memo;
    });
  }
  clearmemo(){
    this.mobileNoM="";
    this.landPhoneNoM="";
    this.officeNoM="";
    this.addressM="";
    this.officeAddressM="";
    this.bloodGroupM="";
    this.heightM="";
    this.weightM="";
    this.idNoM="";
    this.licenceNoM="";
    this.bankAccountNoM="";
    this.passportNoM="";
    this.notesM="";
  }



  profile(){
    this.show="profile";
    this.editedUserName="";
  }
  editprofile(){
    this.show="editprofile";
  }
  saveprofile(){
    const editUser={
      userId:this.userId,
      userName:this.editedUserName
    }
    if(editUser.userId==undefined || editUser.userName.indexOf(' ')>=0 || editUser.userName==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Username!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.editprofile(editUser).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.userName=this.editedUserName;
          this.profile();
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

}
