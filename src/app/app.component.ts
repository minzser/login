import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AdminPage } from '../pages/admin/admin';
import { UserPage } from '../pages/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  role : any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.role = window.localStorage.getItem('role');
      this.checkPreviousAuthorization();
    });
  }

  checkPreviousAuthorization(): void { 
    if((window.localStorage.getItem('icnumber') === "undefined" || window.localStorage.getItem('icnumber') === null)) {
      //this.rootPage = LoginPage; (Kalau tak login lagi, redirect ke page login)
    } else {
        if(this.role == "Admin"){
          this.rootPage = AdminPage; //(Kalau role = Admin, redirect ke Admin page)
        } else if(this.role == "User"){
          this.rootPage = UserPage //(Kalau role = User, redirect ke User page); 
        }
    }
  }
}

