import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private deeplinks: Deeplinks) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage }
    ];

    this.platform.ready().then(()=>{
      this.deeplinks.route({
           '/home': HomePage,
           '/list': 'ListPage',
         }).subscribe((match) => {
           // match.$route - the route we matched, which is the matched entry from the arguments to route()
           // match.$args - the args passed in the link
           // match.$link - the full link data
           console.log('Successfully matched route', match);
           console.log('my target is : ' + match.$route.name);
           this.nav.push('ListPage');
         }, (nomatch) => {
           // nomatch.$link - the full link data
           console.error('Got a deeplink that didn\'t match', nomatch);
         });
    })


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
