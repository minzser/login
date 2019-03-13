import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AdminPage } from '../admin/admin';
import { UserPage } from '../user/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public http   : HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController)
  { 
  }


  public checkLogin : boolean = false;

  /* Login details */
  icnumber = ["admin", "user"];
  pass = ["123", "123"];
  role = ["Admin", "User"];

  /* From user form */
  ic = "";
  password = "";

  rolez = "";


  login(){

    /* Check if login is true or false */
    for(let i = 0; i <= this.icnumber.length; i++){
      if(this.ic == this.icnumber[i] && this.password == this.pass[i]){
        this.checkLogin=true;
        this.rolez = this.role[i];
        window.localStorage.setItem('icnumber', this.icnumber[i]);
        window.localStorage.setItem('role', this.role[i]);
        break;
      }
      else {
        this.checkLogin=false;
      }
  }

  /* Redirect to page for each role */
  if (this.checkLogin == true){
    if(this.rolez == "Admin"){
      this.navCtrl.setRoot(AdminPage);
    } else if(this.rolez == "User"){
      this.navCtrl.setRoot(UserPage);
    }
  } else {
    let alert = this.alertCtrl.create({
      title: 'RALAT',
      subTitle: 'Nombor IC atau kata laluan anda masukkan adalah salah!',
      buttons: ['OK']
    });
    alert.present();
  }
  
}


}