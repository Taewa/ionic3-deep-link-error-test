import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ListPage } from '../list/list'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public test:any;
  constructor(public navCtrl: NavController) {
    this.test = 'home ready';
  }

  testFn(ev){
    console.log('ev.target.value : ' + ev.target.value);
    
    this.test = ev.target.value;

    console.log('test : ' + this.test);
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');

  }


  toList(){
    this.navCtrl.push('ListPage');
  }


}
