

import { CurrencyPipe } from '@angular/common';
// import { MessageComponent } from './message/message.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { SigninComponent } from './signin/signin.component';
//
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemCreateComponent } from './components/items/item-create/item-create.component';
import { ItemListComponent } from './components/items/item-list/item-list-component/item-list.component';
import { LoginComponent } from './components/login/login.component';
import { MessagepageComponent } from './components/messagepage/messagepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OwnerInventory } from './posts/inventory/owner-inventory.component';
import { SharedModule } from './shared.module';














@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    WelcomeComponent,
    LoginComponent,
    // SigninComponent,
    SignupComponent,
    DashboardComponent,
    OwnerInventory

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
    AngularFireModule.initializeApp(environment.firebase),

    AppRoutingModule,

    FlexLayoutModule,

    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatIconModule,
    MatDatepickerModule,

    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,

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
