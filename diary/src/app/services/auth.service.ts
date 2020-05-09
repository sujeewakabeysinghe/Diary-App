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
    console.log("auth works!");
    const token=localStorage.getItem('Token');
    let headers=new Headers();
    headers.append('Authorization',token);
    return this.http.get('http://localhost:3000/memo/readmemo',{headers:headers}).pipe(map(res=>res.json()));
  }

}
