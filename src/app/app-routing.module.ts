import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { MenupageComponent } from './menupage/menupage.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{
  path: "", component: HomepageComponent
}, {
  path: "about", component: AboutpageComponent
}, {
  path: "menu", component: MenupageComponent
}, {
  path: "details/:i", component: DetailsComponent
},{
  path: "cart", component: CartComponent
}, {
  path: "**", redirectTo: ""
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
