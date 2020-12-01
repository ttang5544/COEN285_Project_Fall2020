import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { ItemFormComponent } from './item-form/item-form.component';

import { MessagepageComponent } from './messagepage/messagepage.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { WelcomeComponent } from './welcome/welcome.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'post-create-path', component: PostCreateComponent  },
  { path: 'post-list-path', component: PostListComponent },
  { path: 'item-form-component', component: ItemFormComponent },
  { path: 'app-messagepage-component', component: MessagepageComponent }
];

// const routes: Routes = [
//   {
//     path: '', redirectTo: 'home', pathMatch: 'full'
//   },
//   {
//     path: 'home', component: AppComponent,
//     children: [
//       {
//         path: '', redirectTo: 'login', pathMatch: 'full'
//       },
//       {
//         path: 'login', component: WelcomeComponent
//       }
//     ]
//   },
//   {
//     path: 'dashboard', component: DashboardComponent,
//     children: [
//       {
//         path: 'post-create-path', component: PostCreateComponent
//       },
//       {
//         path: 'post-list-path', component: PostListComponent
//       },
//       {
//         path: 'item-form-component', component: ItemFormComponent
//       }
//     ]
//   },
//   {
//     path: 'signin-path', component:SigninComponent
//   },
//   {
//     path: 'signup-path', component:SignupComponent
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostCreateComponent, PostListComponent, ItemFormComponent];
