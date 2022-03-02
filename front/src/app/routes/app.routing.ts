import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "../components/unique-pages/home/home.component";
import { CartComponent } from "../components/unique-pages/cart/cart.component";
import { ProductsComponent } from '../components/utils/customer/products-pages/products/products.component';
import { PurchasesComponent } from '../components/utils/customer/purchases-pages/purchases/purchases.component';
import { ViewProductComponent } from '../components/utils/customer/products-pages/view-product/view-product.component';

const appRoutes:Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  // {path:'login', component:HomeComponent},
  // {path:'register', component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'purchases',component:PurchasesComponent},
  {path:'cart', component:CartComponent},
  {path: 'viewproduct', component: ViewProductComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ViewProductComponent]
