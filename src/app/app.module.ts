<<<<<<< Updated upstream
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
=======
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
import { WelcomeComponent } from './components/welcome/welcome.component';

import { SharedModule } from './shared.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MessagepageComponent } from './components/messagepage/messagepage.component';
import { ItemCreateComponent } from './components/items/item-create/item-create.component';
import { ItemListComponent } from './components/items/item-list/item-list-component/item-list.component';
// import { MessageComponent } from './message/message.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { SigninComponent } from './signin/signin.component';
//


>>>>>>> Stashed changes

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { environment } from '../environments/environment';
import { AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';    // the header cmpnt

import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SigninComponent } from './signin/signin.component';

import {MatInputModule} from '@angular/material/input';
import { MessagepageComponent } from './messagepage/messagepage.component';
import {MatBadgeModule} from '@angular/material/badge';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OwnerInventory } from './posts/inventory/owner-inventory.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostCreateComponent,
    PostListComponent,
    routingComponents,
    MessagepageComponent,
    WelcomeComponent,
    LoginComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    OwnerInventory
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
<<<<<<< Updated upstream
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
    AppRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
=======
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,

  ],
  providers: [
    CurrencyPipe,
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
