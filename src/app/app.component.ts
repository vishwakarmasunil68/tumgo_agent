import {LoginPage} from './../pages/login/login';
import {Component} from '@angular/core';
import {Events, ModalController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {SignupPage} from "../pages/signup/signup";
import {FileComplaintPage} from "../pages/file-complaint/file-complaint";
import {MessageToHomeProvider} from "../providers/message-to-home/message-to-home";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {EditProfilePage} from "../pages/edit-profile/edit-profile";
import {SplashPage} from "../pages/splash/splash";
import {ViewTicketPage} from "../pages/view-ticket/view-ticket";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private homeMessage: MessageToHomeProvider,
              modalCtrl:ModalController,private events:Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      statusBar.backgroundColorByHexString('#4e51a3');
      statusBar.styleDefault();
      splashScreen.hide();
      // let splash = modalCtrl.create(SplashPage);
      // splash.present();
      this.startApplication();

      console.log("Tumgo agent");

      events.subscribe('start_application', (data) => {
        console.log("start_application:-" + data);
        this.startApplication();
      });
    });
  }

  startApplication(){
    this.rootPage=LoginPage;
  }

  menuClicked(data) {
    console.log("app data:-" + data);
    this.homeMessage.sendMessage(data);
  }
}

