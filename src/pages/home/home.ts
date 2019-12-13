import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AddImagePage} from "../add-image/add-image";
import {MessageToHomeProvider} from "../../providers/message-to-home/message-to-home";
import {AbourPage} from "../abour/abour";
import {ViewTicketPage} from "../view-ticket/view-ticket";
import {LoginPage} from "../login/login";
import {EditProfilePage} from "../edit-profile/edit-profile";
import {Subscription} from "rxjs";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private subscriptions: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController,
              private homeMessage: MessageToHomeProvider,private toastCtrl: ToastController) {

    // let value=this.generateNum();
    // console.log("gen value:-"+value);
    // if(window.localStorage.getItem("rand_set")!="1"){
    //   window.localStorage.setItem("rand",value+"");
    //   window.localStorage.setItem("rand_set","1");
    // }


  }

  generateNum(){
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
  }

  ionViewWillEnter(){
    this.subscriptions=this.homeMessage.getMessage().subscribe(message => {
      console.log("message:-" + message.data);
      this.menuCtrl.close();
      try{
        let value=message.data.toString();
        // console.log("value:-"+value);
        // if(value.split(",")[0]==window.localStorage.getItem("rand")){
        switch (value) {
          case "menu_new_occurance":
            this.navCtrl.push(AddImagePage);
            break;
          case "menu_about":
            this.navCtrl.push(AbourPage);
            break;
          case "menu_setting":
            this.navCtrl.push(EditProfilePage);
            break;
          case "menu_view_ticket":
            this.navCtrl.push(ViewTicketPage);
            break;
          case "menu_logout":
            break;
          // }
        }
      }catch (e) {
        console.log(e);
      }
    });
    console.log("ionic enter");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openMenu() {
    this.menuCtrl.open();
  }

  addOccurance() {
    this.navCtrl.push(AddImagePage);
  }

  openTicket() {
    this.navCtrl.push(ViewTicketPage);
  }

  logoutUser() {
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLeave(){
    console.log("ionic leave");
    this.subscriptions.unsubscribe();
  }
  rejectTicket(){
    this.presentToast("Ticket Rejected");
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
