import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './pages/body/body.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';

//Routing definition
const routes: Routes = [
  { path: 'home', component:BodyComponent},
  { path: 'about', component:AboutComponent},
  { path: 'item', component:ItemComponent},
  { path: 'blog', component:BlogComponent},
  { path: 'shop', component:ShopComponent},
  { path: 'contact', component:ContactComponent},

//Routing exception
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
