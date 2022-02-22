import { Component, Input, OnInit } from '@angular/core';
import { IModalParams } from 'src/app/interfaces/modal/Imodal-params';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hide():void{
    this.params.hidden=!this.params.hidden;
  }

  @Input() params:IModalParams = {
    title: '',
    id: '',
    formParams: {
      inputs: [],
      selects: []
    },
    footer: '',
    hidden: true
  };
}
