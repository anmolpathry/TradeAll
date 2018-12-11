import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosPage } from '../productos/productos';

/**
 * Generated class for the CarritoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {
  
 carrito = [];
  producto= '' ;
  nombre='';
  precio='';
  imagen='';



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.producto = this.navParams.get('producto');
    this.carrito = this.navParams.get('carrito');
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritoPage');
  }

  clickAgregar(){
    this.carrito.push(
     this.producto
    );
    this.navCtrl.pop();
  }

  

}
