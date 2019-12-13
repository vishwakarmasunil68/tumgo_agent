import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the ThanksGenTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thanks-gen-ticket',
  templateUrl: 'thanks-gen-ticket.html',
})
export class ThanksGenTicketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThanksGenTicketPage');
  }


  backHome() {
    this.navCtrl.setRoot(HomePage);
  }


}
