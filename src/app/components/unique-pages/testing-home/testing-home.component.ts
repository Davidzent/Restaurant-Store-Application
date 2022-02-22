import { Component, OnInit } from '@angular/core';
import { IModalParams } from 'src/app/interfaces/modal/Imodal-params';

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

  params:IModalParams={
    hidden: true,
    title: 'title',
    id: 'id',
    formParams: {
      inputs: [{
        name: "inputname",
        title: "inputTitle",
        id: "inputid",
        options: "required",
        type: "text"
      },
      {
        name: "inputname2",
        title: "inputTitle2",
        id: "inputid2",
        options: "required",
        type: "text"
      }
      ],
      selects: [{
        name: "SelectName",
        title: "SelectTitle",
        id: "SelectID",
        options: [
          { value: 1, title: "OptionTitle1" },
          { value: 2, title: "OptionTitle2" },
          { value: 3, title: "OptionTitle3" },
          { value: 4, title: "OptionTitle4" }
        ]
      },
      {
        name: "SelectName2",
        title: "SelectTitle2",
        id: "SelectID2",
        options: [
          { value: 1, title: "S2OptionTitle1" },
          { value: 2, title: "S2OptionTitle1" },
          { value: 3, title: "S2OptionTitle1" },
          { value: 4, title: "S2OptionTitle1" }
        ]
      },
      ]
    },
    footer: 'footer'
  }
}
