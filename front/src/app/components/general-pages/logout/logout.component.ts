import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  logout():void{
    this.userService.logOut();
    sessionStorage.setItem("user","");
    location.reload();
  }

}
