import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  
  correo = '';
  contra= '';
  nombre= '';
  telefono='';
  usuarios = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public storage: Storage) {
      this.usuarios = this.navParams.get('usuarios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  clickRegistro(){
    if( this.contra.length >= 8){
      this.usuarios.push({
        correo: this.correo,
        contra: this.contra,
        nombre: this.nombre,
        telefono: this.telefono
      });
      this.storage.set('usuarios', JSON.stringify(this.usuarios));
      this.navCtrl.pop();

    }
    
  }

}
