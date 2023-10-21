import { Component } from '@angular/core';
import { idishes } from '../idishes';
import { dishes } from '../dishes';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent {
  dishes : idishes[] = dishes;

  constructor(private cartService: CartService) { } 

  addToCart(dish: idishes) {
    this.cartService.addToCart(dish);
    alert('The dish has been added to your cart!');
  }
}
