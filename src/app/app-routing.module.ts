import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './pages/body/body.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchComponent } from './pages/search/search.component';

//Routing definition
const routes: Routes = [
  { path: 'home', component:BodyComponent},
  { path: 'about', component:AboutComponent},
  { path: 'item/:id', component:ItemComponent},
  { path: 'search/:term', component:SearchComponent},
  { path: 'blog', component:BlogComponent},
  { path: 'shop', component:ShopComponent},
  { path: 'contact', component:ContactComponent},

//Routing exception
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
