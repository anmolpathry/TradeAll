import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carro',
  templateUrl: 'carro.html',
})
export class CarroPage {

  Carrito = '';
  carrito= [];

 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.carrito = this.navParams.get('carrito');
    


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarroPage');
  }

}
