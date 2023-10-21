import { Injectable } from '@angular/core';
import { idishes } from './idishes';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<idishes> = [];

  constructor() { }

  addToCart(obj: idishes){
    this.cart.push(obj);
  }

  getCart(){
    return this.cart;
  }

  calcTotal(){
    let total = 0;
    this.cart.forEach((value) =>{
      total += value.price;
    })
    return total;
  } 
    
  applyServiceFeeAndDiscount(total: number): number {
    let discount = total * 0.10;
    let total2 = this.calcTotal() + discount;
    

    if (total > 40) {
      total2 -= total * 0.15;
    }

    return total2;
  }
}
