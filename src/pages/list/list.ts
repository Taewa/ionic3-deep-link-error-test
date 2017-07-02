import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  public test:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.test = 'list ready';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  testFn(ev){
    console.log('ev.target.value : ' + ev.target.value);
    
    this.test = ev.target.value;

    console.log('test : ' + this.test);
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');

  }

  openModal(): void {
    let modal = this.modalCtrl.create('ModalPage');
    modal.present();

    modal.onDidDismiss((data) => {
      console.log('modal dismissed');
    });
  }

}


