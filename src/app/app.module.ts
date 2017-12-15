import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductService } from './product/product.service';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './product/category/category.component';
import { AppRouterModule } from './router.module';
import { DropDownDirective } from './custom-directives/dropdown.directive';
import { BlogComponent } from './blog/blog.component';
import { HttpModule } from '@angular/http';
import { BlogArticle } from './blog/blog-article/blog-article.component';
import { AuthenticationService } from './authentication/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './authentication/registration.component';
import { SetFocusDirective } from './custom-directives/set-focus.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShoppingCartComponent,
    ProductItemComponent,
    HeaderComponent,
    CategoryComponent,
    BlogComponent,
    BlogArticle,
    RegistrationComponent,
    DropDownDirective,
    SetFocusDirective
  ],
  imports: [
    BrowserModule,
    AppRouterModule, 
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, ShoppingCartService, AuthenticationService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
