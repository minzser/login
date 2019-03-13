import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  logout(){
    window.localStorage.clear();
    this._app.getRootNav().setRoot(LoginPage);
  }
}
