import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public test:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  	this.test = 'Modal ready';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  testFn(ev){
    this.test = ev.target.value;
    console.log('ev.target.value : ' + ev.target.value);
    console.log('test : ' + this.test);
  }

  closeModal(){
  	this.view.dismiss();
  }


}
