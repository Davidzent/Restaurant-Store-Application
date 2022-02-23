import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/Iuser';
import { IModalParams } from 'src/app/interfaces/modal/Imodal-params';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getUser(form:any){
    let user:IUser={
      user_id:99,
      username:form[0].value,
      password:form[1].value,
      fname:"John",
      lname:"Doe",
      email:"JohnDoe@email.com",
      roleid:1
    }
    localStorage.setItem("user",JSON.stringify(user));
    location.reload();
  }

  hide():void{
    this.params.hidden=!this.params.hidden;
  }

  params:IModalParams={
    hidden: true,
    title: 'Log in',
    formParams: {
      inputs:[
        {
          name: "username",
          title: "Username",
          type: "text"
        },
        {
          name: "password",
          title: "Password",
          type: "password"
        }
      ]
    },
    footer: 'Log in'
  }

}
