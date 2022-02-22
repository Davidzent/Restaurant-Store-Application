//system library
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//main library
import { AppComponent } from './app.component';


//unique library
import { HomeComponent } from './components/unique-pages/home/home.component';
import { CartComponent } from './components/unique-pages/cart/cart.component';
import { FoodMenuComponent } from './components/unique-pages/food-menu/menu.component';

//general library
import { NavbarComponent } from './components/general-pages/navbar/navbar.component';
import { FooterComponent } from './components/general-pages/footer/footer.component';

//utils modal
import { ModalComponent } from './components/utils/modal/modal/modal.component';
import { LabelSelectComponent } from './components/utils/modal/label-select/label-select.component';
import { LabelInputComponent } from './components/utils/modal/label-input/label-input.component';

//utils products
import { ProductComponent } from './components/utils/products-pages/product/product.component';
import { ProductsComponent } from './components/utils/products-pages/products/products.component';
import { NewProductComponent } from './components/utils/products-pages/new-product/new-product.component';

//utils purchases
import { PurchaseComponent } from './components/utils/purchases-pages/purchase/purchase.component';
import { PurchasesComponent } from './components/utils/purchases-pages/purchases/purchases.component';
import { NewPurchaseComponent } from './components/utils/purchases-pages/new-purchase/new-purchase.component';

//others


//testing this component is going to be removed before the presentation do not add anything important
import { TestingHomeComponent } from './components/unique-pages/testing-home/testing-home.component';


@NgModule({
  declarations: [
    //main
    AppComponent,

    //general
    NavbarComponent,
    FooterComponent,

    //unique
    HomeComponent,
    CartComponent,
    FoodMenuComponent,

    //products
    ProductComponent,
    ProductsComponent,
    NewProductComponent,

    //purchases
    PurchaseComponent,
    PurchasesComponent,
    NewPurchaseComponent,

    //modal
    ModalComponent,
    LabelSelectComponent,
    LabelInputComponent,

    //testing will be deleted later
    TestingHomeComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
