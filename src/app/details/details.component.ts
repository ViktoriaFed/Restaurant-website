import { Component, OnInit } from '@angular/core';
import { idishes } from '../idishes';
import { ActivatedRoute, Params } from '@angular/router';
import { dishes } from '../dishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dish: idishes = {} as idishes;
  id : number = 0;

  constructor (private route: ActivatedRoute, private CS: CartService){}

  addToCart (){
    alert("The dish has been added to your cart!");
    this.CS.addToCart(this.dish);

  }

  ngOnInit(): void {
   this.route.params.subscribe((param: Params) =>{
    this.id = param["i"];
    this.dish = dishes[this.id]
   })
    
  }
}
