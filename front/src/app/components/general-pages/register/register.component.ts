import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/Iuser';
import { IModalParams } from 'src/app/interfaces/modal/Imodal-params';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setUser(form:any){
    let user:IUser={
      user_id:99,
      username:form[0].value,
      password:form[1].value,
      fname:form[2].value,
      lname:form[3].value,
      email:form[4].value,
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
    title: 'Register',
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
        },
        {
          name: "fname",
          title: "First Name",
          type: "text"
        },
        {
          name: "lname",
          title: "Last Name",
          type: "text"
        },
        {
          name: "email",
          title: "Email",
          type: "text"
        }
      ]
    },
    footer: 'Register'
  }

}
