import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../interfaces/Iproduct';

@Pipe({
  name: 'getImg'
})
export class GetImgPipe implements PipeTransform {
  category: string;
  imgNum: string;

  transform(value: IProduct, ...args: unknown[]): string {
    if (value.typeid.toLocaleString() == 'Lunch'){
      this.category = 'burger';
      
  }

  if (value.typeid.toLocaleString() == 'Dinner'){
    this.category = 'pasta';
}

if (value.typeid.toLocaleString() == 'Breakfast'){
  this.category = 'pizza';
}

this.imgNum = value.product_id.toLocaleString();

    return `https://foodish-api.herokuapp.com/images/${this.category}/${this.category}${this.imgNum}.jpg`;
  }

}
