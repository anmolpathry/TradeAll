import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 correo='';
 contra = '';

 usuarios = [];

 registro = RegistroPage;



  constructor(public navCtrl: NavController, public alert: AlertController,
    public storage: Storage) {
      this.storage.keys()
      .then(keys => {
        if (keys.some( k => k == 'usuarios')){
          this.storage.get('usuarios')
          .then(usuarios => {
            this.usuarios = JSON.parse(usuarios);
          })
        }
      })

  }

  clickSesion(){
    let index = this.usuarios.findIndex( u => u.correo == this.correo &&
      u.contra == this.contra);

      if (index >= 0) {
        const alerta = this.alert.create({
          title: "App",
          subTitle: "Inicio de Sesión Válido",
          buttons: ['OK']
        });
        alerta.present();
           
      }
      else {
        const alerta = this.alert.create({
          title: "App",
          subTitle: "Inicio de Sesión No Válido",
          buttons: ['OK']
        });
        alerta.present();
      }
   
  }

    clickRegistro(){
      this.navCtrl.push(this.registro, {usuarios: this.usuarios});
    }

  

}
