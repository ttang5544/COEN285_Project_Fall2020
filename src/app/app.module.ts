import { AsyncPipe, CurrencyPipe, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { SharedModule } from './@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FirebaseAuthService } from './@providers/firebase/fb-auth.service';
import { FirebaseFirestoreService } from './@providers/firebase/fb-database-fs.service';
import { FirebaseFunctionsService } from './@providers/firebase/fb-functions.service';
import { FirebaseStorageService } from './@providers/firebase/fb-storage.service';
import { AuthService, CallableService, DatabaseService, ImageStorageService } from './@providers/service-interfaces';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToolTimeModule } from './@tooltime/tool-time.module';







const AngularFireModules = [
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule,
  AngularFireFunctionsModule,
  AngularFirestoreModule,
  AngularFireStorageModule,
];

const preAuthComponents = [
  AppComponent,
  WelcomeComponent,
  SignupComponent,
  LoginComponent,
];




@NgModule({
  declarations: [
    ...preAuthComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...AngularFireModules,
    SharedModule,
    ToolTimeModule,
    AppRoutingModule,
  ],
  providers: [
    CurrencyPipe,
    AsyncPipe,
    TitleCasePipe,
    FirebaseAuthService,
    FirebaseFirestoreService,
    FirebaseStorageService,
    FirebaseFunctionsService,
    { provide: AuthService, useExisting: FirebaseAuthService },
    { provide: CallableService, useClass: FirebaseFunctionsService },
    { provide: DatabaseService, useClass: FirebaseFirestoreService },
    { provide: ImageStorageService, useClass: FirebaseStorageService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
