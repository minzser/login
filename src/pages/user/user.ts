import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  logout(){
    window.localStorage.clear();
    this._app.getRootNav().setRoot(LoginPage);
  }

}
