import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt'; //npm install angular2-jwt

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:Http
  ) { }

  registeruser(user:any){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/user/register',user,{headers:headers}).pipe(map(res=>res.json()));
  }

  loguser(user:any){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/user/login',user,{headers:headers}).pipe(map(res=>res.json()));
  }

  storeuser(token:any){
    localStorage.setItem('Token',token);
  }

  isloggedin(){
    return tokenNotExpired('Token');
  }

  logoutuser(){
    localStorage.clear();
  }

  getuser(){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    return this.http.get('http://localhost:3000/user/profile',{headers:headers}).pipe(map(res=>res.json()));
  }

  writeday(day:any){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/day/write',day,{headers:headers}).pipe(map(res=>res.json()));
  }

  readday(){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    return this.http.get('http://localhost:3000/day/read',{headers:headers}).pipe(map(res=>res.json()));
  }

  readcontact(){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    return this.http.get('http://localhost:3000/contact/readcontact',{headers:headers}).pipe(map(res=>res.json()));
  }

  createcontact(contact:any){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/contact/createcontact',contact,{headers:headers}).pipe(map(res=>res.json()));
  }

  editprofile(user:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/user/editprofile',user,{headers:headers}).pipe(map(res=>res.json()));
  }

  edithasmemo(user:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/user/edithasmemo',user,{headers:headers}).pipe(map(res=>res.json()));
  }

  creatememo(memo:any){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/creatememo',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  readmemo(){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    return this.http.get('http://localhost:3000/memo/readmemo',{headers:headers}).pipe(map(res=>res.json()));
  }

  editmemoMobileNo(memo:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/editmemoMobileNo',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  editmemoLandPhoneNo(memo:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/editmemolandPhoneNo',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  editmemoOfficeNo(memo:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/editmemoofficeNo',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  editmemoAddress(memo:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/editmemoaddress',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  editmemoOfficeAddress(memo:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/editmemoofficeaddress',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  editmemoBlooGroup(memo:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/editmemobloodgroup',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  editmemoHeight(memo:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/editmemoheight',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  editmemoWeight(memo:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/editmemoweight',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  editmemoIdNo(memo:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/editmemoid',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  memoLicenceNo(memo:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/editmemolicence',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  editmemoBankAccountNo(memo:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/editmemobankaccount',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  editmemoPassportNo(memo:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/editmemopassport',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  editmemoNotes(memo:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/memo/editmemonotes',memo,{headers:headers}).pipe(map(res=>res.json()));
  }

  deletecontact(contact:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/contact/deletecontact',contact,{headers:headers}).pipe(map(res=>res.json()));
  }

  deleteday(day:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/day/deleteday',day,{headers:headers}).pipe(map(res=>res.json()));
  }

  savepassword(user:any){
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/user/editpassword',user,{headers:headers}).pipe(map(res=>res.json()));
  }

}
