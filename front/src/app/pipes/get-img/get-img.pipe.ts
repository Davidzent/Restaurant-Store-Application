import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../interfaces/Iproduct';

@Pipe({
  name: 'getImg'
})
export class GetImgPipe implements PipeTransform {
  category: string;
  imgNum: string;

  transform(value: IProduct, ...args: unknown[]): string {
    this.category = value.typeid.toLowerCase();

    this.imgNum = (value.product_id%81).toLocaleString();

    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.category}`;
  }

}
