import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  //To send data from the new course component to the course page we
  //need to use @Output and create a new event emitter
  @Output() sendModalResponse = new EventEmitter();

  onSubmit(form:any):void{
    this.sendModalResponse.emit(form);
    for(let i=0;i<form.length-1;i++){
      form[i].value="";
    }
  }

  hide():void{
    this.params.hidden=!this.params.hidden;
  }

  @Input() params:IModalParams = {
    title: '',
    id: '',
    formParams: {
      hidden:[],
      inputs: [],
      selects: []
    },
    footer: '',
    hidden: true
  };
}
