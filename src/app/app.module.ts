import {LoginPage} from './../pages/login/login';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {SignupPage} from "../pages/signup/signup";
import {AddImagePage} from "../pages/add-image/add-image";
import {FileComplaintPage} from "../pages/file-complaint/file-complaint";
import {ThanksPage} from "../pages/thanks/thanks";
import {MessageToHomeProvider} from "../providers/message-to-home/message-to-home";
import {AbourPage} from "../pages/abour/abour";
import {ViewTicketPage} from "../pages/view-ticket/view-ticket";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {ForgotThanksPage} from "../pages/forgot-thanks/forgot-thanks";
import {EditProfilePage} from "../pages/edit-profile/edit-profile";
import {SplashPage} from "../pages/splash/splash";
import {ThanksGenTicketPage} from "../pages/thanks-gen-ticket/thanks-gen-ticket";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    AddImagePage,
    FileComplaintPage,
    ThanksPage,
    AbourPage,
    ViewTicketPage,
    ForgotPasswordPage,
    ForgotThanksPage,
    EditProfilePage,
    SplashPage,
    ThanksGenTicketPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    AddImagePage,
    FileComplaintPage,
    ThanksPage,
    AbourPage,
    ViewTicketPage,
    ForgotPasswordPage,
    ForgotThanksPage,
    EditProfilePage,
    SplashPage,
    ThanksGenTicketPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MessageToHomeProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
