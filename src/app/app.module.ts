

import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { OwnerInventory } from './items/inventory/owner-inventory.component';
import { ItemCreateComponent } from './items/item-create/item-create.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { LoginComponent } from './login/login.component';
import { MessagepageComponent } from './messagepage/messagepage.component';
import { SharedModule } from './shared.module';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';














@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    WelcomeComponent,
    LoginComponent,
    // SigninComponent,
    SignupComponent,
    DashboardComponent,
    OwnerInventory,

    HeaderComponent,
    DashboardComponent,
    MessagepageComponent,

    // ItemFormComponent,
    ItemCreateComponent,
    ItemListComponent,
  ],
  imports: [,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,




  ],
  providers: [
    CurrencyPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
