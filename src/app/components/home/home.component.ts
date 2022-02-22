import { Component, OnInit } from '@angular/core';
import { IModalParams } from 'src/app/interfaces/modal/Imodal-params';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  params:IModalParams={
    hidden: true,
    title: 'test',
    id: 'test',
    formParams: {
      inputs: [{
        name: "test",
        title: "test",
        id: "test",
        options: "required",
        type: "text"
      },
      {
        name: "test2",
        title: "test2",
        id: "test2",
        options: "required",
        type: "text"
      }
      ],
      selects: [{
        name: "test",
        title: "test",
        id: "test",
        options: [
          { value: 1, title: "test" },
          { value: 2, title: "test2" },
          { value: 3, title: "test3" },
          { value: 4, title: "test4" }
        ]
      },
      {
        name: "test2",
        title: "test2",
        id: "test2",
        options: [
          { value: 1, title: "test" },
          { value: 2, title: "test2" },
          { value: 3, title: "test3" },
          { value: 4, title: "test4" }
        ]
      },
      ]
    },
    footer: 'test'
  }

  constructor() { }

  ngOnInit() {
  }

  hide():void{
    this.params.hidden=!this.params.hidden;
  }

}
