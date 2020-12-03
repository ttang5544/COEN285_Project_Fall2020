import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { MessagepageComponent } from './messagepage/messagepage.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
=======
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ItemCreateComponent } from './components/items/item-create/item-create.component';
import { ItemListComponent } from './components/items/item-list/item-list-component/item-list.component';
import { MessagepageComponent } from './components/messagepage/messagepage.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'post-create-path', component: PostCreateComponent  },
  { path: 'post-list-path', component: PostListComponent },
  { path: 'app-messagepage-component', component: MessagepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostCreateComponent, PostListComponent];
