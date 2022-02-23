import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/Iuser';
import { IlabelInput } from 'src/app/interfaces/modal/Ilabel-input';
import { IModalParams } from 'src/app/interfaces/modal/Imodal-params';
import { IUserInputPipe } from 'src/app/pipes/IUser-input/IUser-Input.pipe';

@Component({
  selector: 'testing-home',
  templateUrl: './testing-home.component.html',
  styleUrls: ['./testing-home.component.css']
})
export class TestingHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //modal
  hide():void{
    this.params.hidden=!this.params.hidden;
  }

  pipe:IUserInputPipe = new IUserInputPipe();

  user:IUser={
    user_id:0,   //unique id mainly used for form request
    username:"Zent",   //sometimes we might not want to have this like when displaying purchased orders
    password:"12345",   //sometimes we might not want to have this like when displaying purchased orders
    fname:"David",
    lname:"Guijosa",
    email:"david@email.com",
    roleid:1
  }

  //
  params:IModalParams={
    hidden: true,
    title: 'My Account',
    formParams: {
      hidden: this.pipe.transform(this.user)
    },
    footer: 'Edit Account'
  }


//testing all the functionalities of modal
//   params:IModalParams={
//     hidden: true,
//     title: 'title',
//     id: 'id',
//     formParams: {
//       hidden:[{
//         hidden:true,
//         input:{
//           name: "inputname",
//           title: "inputTitle",
//           id: "inputid",
//           value:"username",
//           options: "required",
//           type: "text"
//         }
//       }],
//       inputs: [{
//         name: "inputname",
//         title: "inputTitle",
//         id: "inputid",
//         options: "required",
//         type: "text"
//       },
//       {
//         name: "inputname2",
//         title: "inputTitle2",
//         id: "inputid2",
//         options: "required",
//         type: "text"
//       }
//       ],
//       selects: [{
//         name: "SelectName",
//         title: "SelectTitle",
//         id: "SelectID",
//         options: [
//           { value: 1, title: "OptionTitle1" },
//           { value: 2, title: "OptionTitle2" },
//           { value: 3, title: "OptionTitle3" },
//           { value: 4, title: "OptionTitle4" }
//         ]
//       },
//       {
//         name: "SelectName2",
//         title: "SelectTitle2",
//         id: "SelectID2",
//         options: [
//           { value: 1, title: "S2OptionTitle1" },
//           { value: 2, title: "S2OptionTitle1" },
//           { value: 3, title: "S2OptionTitle1" },
//           { value: 4, title: "S2OptionTitle1" }
//         ]
//       },
//       ]
//     },
//     footer: 'footer'
//   }
}
