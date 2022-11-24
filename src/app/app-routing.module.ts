import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { EditProductComponent } from './shared/components/products/edit-product/edit-product.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { UsersComponent } from './shared/components/users/users.component';

const routes: Routes = [
  {path: "", component: DashboardComponent},
  {path: "products", component: ProductsComponent, children:[
    {path: ":id", component: ProductComponent},
    {path: ":id/:edit", component: EditProductComponent}
  ]},
  {path: "users", component: UsersComponent, children:[
    {path: ":id", component: UserComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
