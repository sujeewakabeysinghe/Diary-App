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
    //console.log(user);
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

}
