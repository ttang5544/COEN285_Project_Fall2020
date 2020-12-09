

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './@tooltime/dashboard/dashboard.component';
import { HeaderComponent } from './@tooltime/header/header.component';
import { OwnerInventory } from './@tooltime/items/inventory/owner-inventory.component';
import { ItemCreateComponent } from './@tooltime/items/item-create/item-create.component';
import { ItemListComponent } from './@tooltime/items/item-list/item-list.component';
import { MessagepageComponent } from './@tooltime/messagepage/messagepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';




const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '', component: HeaderComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'item-create-path', component: ItemCreateComponent },
      { path: 'item-list-path', component: ItemListComponent },
      { path: 'owner-inventory', component: OwnerInventory },
      { path: 'messagepage', component: MessagepageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
