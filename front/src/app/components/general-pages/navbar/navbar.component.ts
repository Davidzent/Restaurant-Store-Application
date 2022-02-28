import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/Iuser';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:IUser=JSON.parse(localStorage.getItem("user")||"{}");

  constructor() { }

  ngOnInit() {
  }

  isLogin():boolean{
    return this.user?this.user.user_id?true:false:false;
  }
  isCustomer():boolean{
    return this.isLogin()?this.user.roleid==1?true:false:false;
  }

}
