import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { idishes } from '../idishes';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  contact = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl ('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl ('', Validators.required),
  });

  contactMe (){
    let paragraph = <HTMLElement>document.getElementById('after');
    if (this.contact.valid){
  
    paragraph.innerHTML = "Thank you for your order! We will contact you shortly!";
  }}

  cart: idishes[] = [];
  total: number = 0;
  total2: number = 0;
  discount: number = 0;
  isEmptyCart: boolean = false;

  whenEmpty(){
    this.isEmptyCart = this.cart.length === 0;
  }

  constructor (private CS: CartService) {}

  updateTotal() {
    this.total2 = this.CS.applyServiceFeeAndDiscount(this.CS.calcTotal());
  }

  ngOnInit(): void {
    this.cart = this.CS.getCart();
    this.total = this.CS.calcTotal();
    this.updateTotal();
    this.whenEmpty();
  }

}
