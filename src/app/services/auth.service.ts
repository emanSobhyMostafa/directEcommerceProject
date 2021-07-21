import { Router } from '@angular/router';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FetchDataService } from './fetch-data.service';
// import { agents } from "../dummyData/agent_data.json";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserSubject!: BehaviorSubject<User>
  public currentUser!: Observable<User>


  constructor(private fetchUserService: FetchDataService, private router: Router) {


  }



  public get currentUserValue(): User {
    return JSON.parse(localStorage.getItem('user') || '{}')

  }

  login(userName: string, password: string) {
    //get the users array fromm json via service
    this.fetchUserService.getAgentData().subscribe(data => {
      const user = data.find(x => x.userName == userName && x.password == password)

      if (user) {

        localStorage.setItem('user', JSON.stringify(user))
        this.router.navigate(['./home'])


      }
      else {

        alert("userName or password is incorrect");
      }

    })



  }



  //find the user of thid user name and password 

  //if user found 1 save in local storege 2 navigate to home page

  //else dispaly error message user name of password in in valid

  // return localStorage.setItem('currentUser', userName)

  logout() {
    localStorage.removeItem("user")
    this.router.navigate(['auth/login'])
  }
}
