import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { Todo1Component } from './todo1/todo1.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TodoviewComponent } from './todoview/todoview.component';
import { GifListComponent } from './gif-list/gif-list.component';
import { OrderComponent } from './ordermodule/order/order.component';
import { ChatComponent } from './chat/chat.component';
import { RapidApiComponent } from './rapid-api/rapid-api.component';
import { AuthGuard } from './guards/auth.guard';
import { AdduserComponent } from './adduser/adduser.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { RxjsComponent } from './rxjs/rxjs.component';

// configure the routes .

// configure the routes .
// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' }, // localhost://4200
//   { path: 'login', component: LoginComponent },
//   { path: 'home', component: HomeComponent }, // localhost://4200
//   { path: 'aboutus', component: AboutusComponent }, // localhost://4200/aboutus
//   { path: 'contactus', component: ContactusComponent },
//   { path: 'todo', component: Todo1Component },
//   { path: 'todoview/:id', component: TodoviewComponent },
//   { path: 'product-list', component: ProductListComponent },
//   { path: 'gif-list', component: GifListComponent },
//   { path: 'homenew', loadChildren: () => import('./homenew/homenew.module').then(m => m.HomenewModule) },
//   { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
//   { path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) },
//   { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
//   { path: '**', component: PagenotfoundComponent },
// ];
const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],

    loadChildren: () =>
      import('./homenew/homenew.module').then((m) => m.HomenewModule),
  },
  {
    path: 'adduser',
    component: AdduserComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  // {
  //   path: 'product',
  //   loadChildren: () =>
  //     import('./product/product.module').then((m) => m.ProductModule),
  // },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  { path: 'product-list', component: ProductListComponent },
  { path: 'gif-list', component: GifListComponent },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'rxjs',
    component: RxjsComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'rapidapi',
    component: RapidApiComponent,
  },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
