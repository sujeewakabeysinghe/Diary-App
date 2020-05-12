import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {

  iconname=true;
  search:string;
  show:string;
  userId:string;
  userName:string;
  userEmail:string;
  date:string;
  today:Date=new Date();
  notes:string;
  day:any;
  contact:any;

  fullName:string;
  contactNo:string;

  editedUserName:string;
  hasMemo:boolean;

  readMemo:any;
  memoId:string;

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

  mobileNoME:string;
  landPhoneNoME:string;
  officeNoME:string;
  addressME:string;
  officeAddressME:string;
  bloodGroupME:string;
  heightME:string;
  weightME:string;
  idNoME:string;
  licenceNoME:string;
  bankAccountNoME:string;
  passportNoME:string;
  notesME:string;

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
      if(this.day.length==0){
        this.emphtymessaged();
      }
      else{
        console.log("YYYYYY");
      }
    });
  }
  emphtymessaged(){
    this.show="emphtymessaged";
    console.log("ddddddd");
  }
  deleteday(dayId:any){
    const day={
      dayId:dayId
    }
    if(day.dayId==undefined){
      this.flashmessage.showFlashMessage({
        messages: ['Something Went Wrong!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.deleteday(day).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
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

  contacts(){
    this.show="contacts";
    this.readcontact();
  }
  readcontact(){
    this.authservice.readcontact().subscribe(res=>{
      this.contact=res.contact;
      if(this.contact.length==0){
        this.emphtymessagec();
      }
      else{
        console.log("XXXXXXX");
      }
    });
  }
  emphtymessagec(){
    this.show="emphtymessagec";
    console.log("0000000");
  }
  createcontact(){
    this.show="createcontacts";
  }
  addcontact(){
    const contact={
      userId:this.userId,
      fullName:this.fullName,
      contactNo:this.contactNo,
    }
    if(contact.userId==undefined || contact.fullName==undefined || contact.contactNo==undefined){
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
    this.fullName="";
    this.contactNo="";
    this.contacts();
  }
  deletecontact(contactId:any){
    const contact={
      contactId:contactId
    }
    if(contact.contactId==undefined){
      this.flashmessage.showFlashMessage({
        messages: ['Something Went Wrong!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.deletecontact(contact).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
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





  memo(){
    if(this.hasMemo){
      this.readmemo();
      this.mobileNoME="";
      this.landPhoneNoME="";
      this.officeNoME="";
      this.addressME="";
      this.officeAddressME="";
      this.bloodGroupME="";
      this.heightME="";
      this.weightME="";
      this.idNoME="";
      this.licenceNoME="";
      this.bankAccountNoME="";
      this.passportNoME="";
      this.notesME="";
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
    if(memoCreate.userId==undefined){
      this.flashmessage.showFlashMessage({
        messages: ['Something Went Wrong!'],
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
      this.memoId=res.memo[0]._id
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

  editmemoMobileNo(){
    this.show="editmemoMobileNo";
  }
  memoMobileNo(){
    const editMemo={
      memoId:this.memoId,
      mobileNoM:this.mobileNoME
    }
    if(editMemo.memoId==undefined || editMemo.mobileNoM.indexOf(' ')>=0 || editMemo.mobileNoM==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Mobile Number!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.editmemoMobileNo(editMemo).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.mobileNoM=this.mobileNoME;
          this.memo();
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

  editmemoLandPhoneNo(){
    this.show="editmemoLandPhoneNo";
  }
  memoLandPhoneNo(){
    const editMemo={
      memoId:this.memoId,
      landPhoneNoM:this.landPhoneNoME
    }
    if(editMemo.memoId==undefined || editMemo.landPhoneNoM.indexOf(' ')>=0 || editMemo.landPhoneNoM==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Mobile Number!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.editmemoLandPhoneNo(editMemo).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.landPhoneNoM=this.landPhoneNoME;
          this.memo();
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

  editmemoOfficeNo(){
    this.show="editmemoOfficeNo";
  }
  memoOfficeNo(){
    const editMemo={
      memoId:this.memoId,
      officeNoM:this.officeNoME
    }
    if(editMemo.memoId==undefined || editMemo.officeNoM.indexOf(' ')>=0 || editMemo.officeNoM==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Office Number!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.editmemoOfficeNo(editMemo).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.officeNoM=this.officeNoME;
          this.memo();
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

  editmemoAddress(){
    this.show="editmemoAddress";
  }
  memoAddress(){
    const editMemo={
      memoId:this.memoId,
      addressM:this.addressME
    }
    if(editMemo.memoId==undefined || editMemo.addressM.length==0 || editMemo.addressM==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Address!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.editmemoAddress(editMemo).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.addressM=this.addressME;
          this.memo();
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

  editmemoOfficeAddress(){
    this.show="editmemoOfficeAddress";
  }
  memoOfficeAddress(){
    const editMemo={
      memoId:this.memoId,
      officeAddressM:this.officeAddressME
    }
    if(editMemo.memoId==undefined || editMemo.officeAddressM.length==0 || editMemo.officeAddressM==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Office Address!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.editmemoOfficeAddress(editMemo).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.officeAddressM=this.officeAddressME;
          this.memo();
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

  editmemoBloodGroup(){
    this.show="editmemoBloodGroup";
  }
  memoBloodGroup(){
    const editMemo={
      memoId:this.memoId,
      bloodGroupM:this.bloodGroupME
    }
    if(editMemo.memoId==undefined || editMemo.bloodGroupM.length==0 || editMemo.bloodGroupM==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Blood Group!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.editmemoBlooGroup(editMemo).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.bloodGroupM=this.bloodGroupME;
          this.memo();
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

  editmemoHeight(){
    this.show="editmemoHeight";
  }
  memoHeight(){
    const editMemo={
      memoId:this.memoId,
      heightM:this.heightME
    }
    if(editMemo.memoId==undefined || editMemo.heightM.length==0 || editMemo.heightM==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Height!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.editmemoHeight(editMemo).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.heightM=this.heightME;
          this.memo();
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

  editmemoWeight(){
    this.show="editmemoWeight";
  }
  memoWeight(){
    const editMemo={
      memoId:this.memoId,
      weightM:this.weightME
    }
    if(editMemo.memoId==undefined || editMemo.weightM.length==0 || editMemo.weightM==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Weight!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.editmemoWeight(editMemo).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.weightM=this.weightME;
          this.memo();
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

  editmemoIdNo(){
    this.show="editmemoIdNo";
  }
  memoID(){
    const editMemo={
      memoId:this.memoId,
      idNoM:this.idNoME
    }
    if(editMemo.memoId==undefined || editMemo.idNoM.length==0 || editMemo.idNoM==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill ID Number!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.editmemoIdNo(editMemo).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.idNoM=this.idNoME;
          this.memo();
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

  editmemoLicenceNo(){
    this.show="editmemoLicenceNo";
  }
  memoLicenceNo(){
    const editMemo={
      memoId:this.memoId,
      licenceNoM:this.licenceNoME
    }
    if(editMemo.memoId==undefined || editMemo.licenceNoM.length==0 || editMemo.licenceNoM==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Licence Number!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.memoLicenceNo(editMemo).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.licenceNoM=this.licenceNoME;
          this.memo();
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

  editmemoBankAccountNo(){
    this.show="editmemoBankAccountNo";
  }
  memoBankAccountNo(){
    const editMemo={
      memoId:this.memoId,
      bankAccountNoM:this.bankAccountNoME
    }
    if(editMemo.memoId==undefined || editMemo.bankAccountNoM.length==0 || editMemo.bankAccountNoM==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Bank Account Number!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.editmemoBankAccountNo(editMemo).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.bankAccountNoM=this.bankAccountNoME;
          this.memo();
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

  editmemoPassportNo(){
    this.show="editmemoPassportNo";
  }
  memoPassportNo(){
    const editMemo={
      memoId:this.memoId,
      passportNoM:this.passportNoME
    }
    if(editMemo.memoId==undefined || editMemo.passportNoM.length==0 || editMemo.passportNoM==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Passport Number!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.editmemoPassportNo(editMemo).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.passportNoM=this.passportNoME;
          this.memo();
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

  editmemoNotes(){
    this.show="editmemoNotes";
  }
  memoNotes(){
    const editMemo={
      memoId:this.memoId,
      notesM:this.notesME
    }
    if(editMemo.memoId==undefined || editMemo.notesM.length==0 || editMemo.notesM==""){
      this.flashmessage.showFlashMessage({
        messages: ['Please Fill Notes!'],
        dismissible: false,
        timeout: 2000,
        type: 'warning'
      });
    }
    else{
      this.authservice.editmemoNotes(editMemo).subscribe(res=>{
        if(res.state){
          this.flashmessage.showFlashMessage({
            messages: [res.msg],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.notesM=this.notesME;
          this.memo();
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
