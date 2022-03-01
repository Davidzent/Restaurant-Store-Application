import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/Iuser';
import { IModalParams } from 'src/app/interfaces/modal/Imodal-params';
import { IUserInputPipe } from 'src/app/pipes/IUser-input/IUser-Input.pipe';
import { UserService } from 'src/app/services/user/user.service';

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
      user_id:this.user.user_id,
      username:form[0].value,
      password:form[1].value,
      fname:form[2].value,
      lname:form[3].value,
      email:form[4].value,
      roleid:this.user.roleid
    }
    this.userService.update(user);
  }

  constructor(private userService:UserService) {
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
