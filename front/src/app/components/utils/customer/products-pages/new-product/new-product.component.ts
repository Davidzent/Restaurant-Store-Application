import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Iproduct';
import { IModalParams } from 'src/app/interfaces/modal/Imodal-params';

@Component({
  selector: 'new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createProduct(form:any){
    let product:IProduct={
      name: form[0].value,
      price: form[1].value,
      description: form[2].value,
      statusid: form[3].value,
      typeid: form[4].value
    }
    console.log(product);
  }

  hide():void{
    this.params.hidden=!this.params.hidden;
  }

  params:IModalParams={
    hidden: true,
    title: 'Create Product',
    formParams: {
      inputs:[
        {
          name: "name",
          title: "Name",
          type: "text"
        },
        {
          name: "price",
          title: "Price",
          type: "text"
        },
        {
          name: "description",
          title: "Description",
          type: "text"
        }
      ],
      selects:[
        {
          name:"statusid",
          title:"Status",
          id:"statusid",
          options:[
            {value:"Open",title:"Open"},
            {value:"Close",title:"Close"}
          ]
        },
        {
          name:"typeid",
          title:"Type",
          id:"typeid",
          options:[
            {value:"Breakfast",title:"Breakfast"},
            {value:"Lunch",title:"Lunch"},
            {value:"Dinner",title:"Dinner"},
            {value:"Dessert",title:"Dessert"}
          ]
        }
      ]
    },
    footer: 'Register'
  }


}
