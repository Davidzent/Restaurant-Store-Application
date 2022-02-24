import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/Iuser';
import { IModalParams } from 'src/app/interfaces/modal/Imodal-params';
import { IUserInputPipe } from 'src/app/pipes/IUser-input/IUser-Input.pipe';

@Component({
  selector: 'my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user:IUser = JSON.parse(localStorage.getItem("user")||'{}');

  pipe:IUserInputPipe = new IUserInputPipe();

  params:IModalParams={
    hidden: true,
    title: 'My Account',
    formParams: {
      hidden: this.pipe.transform(this.user)
    },
    footer: 'Edit Account'
  }

  updateUser(form:any){
    let user:IUser={
      user_id:99,
      username:form[0].value,
      password:form[1].value,
      fname:form[2].value,
      lname:form[3].value,
      email:form[4].value,
      roleid:form[5].value
    }
    localStorage.setItem("user",JSON.stringify(user));
    location.reload();
  }

  constructor() {
  }

  //modal
  hide():void{
    this.user = JSON.parse(localStorage.getItem("user")||'{}');
    this.params={
      hidden: this.params.hidden=!this.params.hidden,
      title: 'My Account',
      formParams: {
        hidden: this.pipe.transform(this.user)
      },
      footer: 'Edit Account'
    }
  }

  ngOnInit() {
  }

}
