import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './pages/body/body.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

//Routing definition
const routes: Routes = [
  { path: '', component:BodyComponent},
  { path: 'about', component:AboutComponent},
  { path: 'item', component:ItemComponent},

//Routing exception
  { path: '**', pathMatch: 'full', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
