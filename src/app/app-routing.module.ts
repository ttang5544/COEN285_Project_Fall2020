import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';

import { WelcomeComponent } from './welcome/welcome.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AppComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: WelcomeComponent}
  ]},
  {path: 'dashboard', component: DashboardComponent, children: [
    { path: 'post-create-path', component: PostCreateComponent },
    { path: 'post-list-path', component: PostListComponent }
  ]},
  { path: 'signin-path', component:SigninComponent },
  { path: 'signup-path', component:SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostCreateComponent, PostListComponent ];
