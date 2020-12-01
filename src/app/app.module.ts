import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component'; // the header cmpnt
import { LoginComponent } from './login/login.component';
import { MessagepageComponent } from './messagepage/messagepage.component';
import { SharedModule } from './shared.module';
// import { MessageComponent } from './message/message.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CurrencyPipe } from '@angular/common';
import { ItemCreateComponent } from './items/item-create/item-create.component';
import { ItemListComponent } from './items/item-list/item-list.component';








@NgModule({
  declarations: [
    AppComponent,
    routingComponents,

    WelcomeComponent,
    LoginComponent,
    // SigninComponent,
    SignupComponent,

    HeaderComponent,
    DashboardComponent,
    MessagepageComponent,

    // ItemFormComponent,
    ItemCreateComponent,
    ItemListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),


  ],
  providers: [
    CurrencyPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
