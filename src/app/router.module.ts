import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './product/category/category.component';
import { NgModule } from '@angular/core';
import { BlogComponent } from './blog/blog.component';
import { RegistrationComponent } from './authentication/registration.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },
    { path: 'products', component: ProductComponent },
    { path: 'category/:categoryName', component: CategoryComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'registration', component: RegistrationComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRouterModule {
    
}