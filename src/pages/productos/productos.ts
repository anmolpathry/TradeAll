import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {

  Carrito= CarritoPage;

  Productos = [];

  productos = [
    {
      id:0,
      nombre: "Árbol de Navidad",
      imagen: "../assets/arbol.jpg",
      precio: "$12,800",
      vendededor: {
        nombre: "María Aceves",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Alonso Ibarra",
        avatar:"",
        fecha: "2018-11-30",
        review: "Buen vendedor y productos de calidad"
        }
      ],
      fecha: "2018-10-2",
      disponibles: "10"
    },

    {
      id:1,
      nombre: "Pie de árbol",
      imagen: "../assets/Pie de pagina.jpg",
      precio: "$600",
      vendededor: {
        nombre: "Carlos Sánchez",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Raúl Rubio",
        avatar:"",
        fecha: "2018-11-05",
        review: "Muy amable, llegó a tiempo"
        }
      ],
      fecha: "2018-09-2",
      disponibles: "5"
    },

    {
      id:2,
      nombre: "Soporte navideño",
      imagen: "../assets/Soporte.jpg",
      precio: "$300",
      vendededor: {
        nombre: "Braulio Reyes",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Paulina Sánchez",
        avatar:"",
        fecha: "2018-11-05",
        review: "Producto en buenas condiciones"
        }
      ],
      fecha: "2018-11-2",
      disponibles: "3"
    },

    {
      id:3,
      nombre: "Estrella de Navidad",
      imagen: "../assets/Estrella.jpg",
      precio: "$200",
      vendededor: {
        nombre: "Francisco Aguilar",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Verónica Álvarez",
        avatar:"",
        fecha: "2018-10-25",
        review: "Envío gratis y rápido"
        }
      ],
      fecha: "2018-10-20",
      disponibles: "5"
    },

    {
      id:4,
      nombre: "Calendario de Navidad",
      imagen: "../assets/Calendario.jpg",
      precio: "$500",
      vendededor: {
        nombre: "Martha Valladares",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Gustavo Aquiles",
        avatar:"",
        fecha: "2018-12-28",
        review: "Buen servicio"
        }
      ],
      fecha: "2018-12-20",
      disponibles: "8"
    },

    {
      id:5,
      nombre: "Cojín Navideño Decorativo",
      imagen: "../assets/Cojin.jpg",
      precio: "$500",
      vendededor: {
        nombre: "Dulce Vázquez",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Carlos Ramírez",
        avatar:"",
        fecha: "2018-12-05",
        review: "Super cómodo y lindo"
        }
      ],
      fecha: "2018-11-20",
      disponibles: "7"
    },

    {
      id:6,
      nombre: "Letrero Navideño",
      imagen: "../assets/Letrero.jpg",
      precio: "$300",
      vendededor: {
        nombre: "Raúl Garfias",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Armando Jiménez",
        avatar:"",
        fecha: "2018-11-28",
        review: "Ideal para decorar"
        }
      ],
      fecha: "2018-10-15",
      disponibles: "5"
    },

    {
      id:7,
      nombre: "Bola de Cristal",
      imagen: "../assets/Bola de cristal.jpg",
      precio: "$500",
      vendededor: {
        nombre: "David Barbosa",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Guillermo Romero",
        avatar:"",
        fecha: "2018-11-18",
        review: "Excelente centro de mesa"
        }
      ],
      fecha: "2018-11-02",
      disponibles: "1"
    },

    {
      id:8,
      nombre: "Tren Decorativo de Santa",
      imagen: "../assets/Trenecito.jpg",
      precio: "$1400",
      vendededor: {
        nombre: "María Ascencio",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Laura Ávalos",
        avatar:"",
        fecha: "2018-12-28",
        review: "Decoración increíble"
        }
      ],
      fecha: "2018-12-20",
      disponibles: "2"
    },

    {
      id:9,
      nombre: "Escarcha 3.6mts",
      imagen: "../assets/Escarcha.jpg",
      precio: "$120",
      vendededor: {
        nombre: "Elizabeth López",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Irlanda Quijano ",
        avatar:"",
        fecha: "2018-11-17",
        review: "Muy adaptable a cualquier lugar"
        }
      ],
      fecha: "2018-11-03",
      disponibles: "8"
    },

    {
      id:10,
      nombre: "Lentes con Orejas de Reno",
      imagen: "../assets/Orejasreno.jpg",
      precio: "$120",
      vendededor: {
        nombre: "José Manrique",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Iván Díaz",
        avatar:"",
        fecha: "2018-11-13",
        review: "Buen disfraz"
        }
      ],
      fecha: "2018-11-01",
      disponibles: "5"
    },

    {
      id:11,
      nombre: "Corona Navideña Puerta",
      imagen: "../assets/Corona.jpg",
      precio: "$500",
      vendededor: {
        nombre: "María Campos",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Fernando Figueroa",
        avatar:"",
        fecha: "2018-12-28",
        review: "Bueno, pero se le cayeron las flores"
        }
      ],
      fecha: "2018-12-20",
      disponibles: "18"
    },

    {
      id:12,
      nombre: "Adorno de Ángel Exterior",
      imagen: "../assets/Angel.jpg",
      precio: "$1520",
      vendededor: {
        nombre: "Alonso Pérez",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Mario Treviño",
        avatar:"",
        fecha: "2018-11-18",
        review: "Excelent decoración de jardín"
        }
      ],
      fecha: "2018-11-08",
      disponibles: "3"
    },

    {
      id:13,
      nombre: "Reflector de Santa",
      imagen: "../assets/Reflector.jpg",
      precio: "$560",
      vendededor: {
        nombre: "Daniel Flores",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Ricardo Cervantes",
        avatar:"",
        fecha: "2018-10-28",
        review: "Luce mucho de noche"
        }
      ],
      fecha: "2018-10-02",
      disponibles: "8"
    },

    {
      id:14,
      nombre: "Infable Santa Oso",
      imagen: "../assets/oso.jpg",
      precio: "$2000",
      vendededor: {
        nombre: "Cecilia Montelongo",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Rocio Murillo",
        avatar:"",
        fecha: "2018-11-18",
        review: "Se desinfló el primer día"
        }
      ],
      fecha: "2018-11-12",
      disponibles: "5"
    },

    {
      id:15,
      nombre: "Infable del Grinch",
      imagen: "../assets/grinch.jpg",
      precio: "$720",
      vendededor: {
        nombre: "Estela Garnica",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Javier Gutierrez",
        avatar:"",
        fecha: "2018-11-25",
        review: "Más pequeño que en la foto"
        }
      ],
      fecha: "2018-11-13",
      disponibles: "5"
    },

    {
      id:16,
      nombre: "Bota Decorativa",
      imagen: "../assets/bota.jpg",
      precio: "$260",
      vendededor: {
        nombre: "Rafael Rodriguez",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Paulina Najar",
        avatar:"",
        fecha: "2018-12-18",
        review: "Excelente para guardar dulces"
        }
      ],
      fecha: "2018-12-12",
      disponibles: "3"
    },

    {
      id:17,
      nombre: "Serie de Luces Navideñas Bastón",
      imagen: "../assets/Luces.jpg",
      precio: "$175",
      vendededor: {
        nombre: "Gabriel Martinez",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Claudia Montero",
        avatar:"",
        fecha: "2018-11-18",
        review: "Buena ilumincación LED"
        }
      ],
      fecha: "2018-11-12",
      disponibles: "7"
    },

    {
      id:18,
      nombre: "Diadema Gorro Santa",
      imagen: "../assets/diadema.jpg",
      precio: "$131",
      vendededor: {
        nombre: "Pedro Suarez",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Armando Herrera",
        avatar:"",
        fecha: "2018-11-12",
        review: "Se cayó el gorrito"
        }
      ],
      fecha: "2018-11-07",
      disponibles: "5"
    },

    {
      id:19,
      nombre: "Nacimiento",
      imagen: "../assets/nacimiento.jpg",
      precio: "$655",
      vendededor: {
        nombre: "Delia Hernandez",
        valoracion: [1,2,3,4]
      },

      reviews:[
        {
        username: "Maía Centeno",
        avatar:"",
        fecha: "2018-12-18",
        review: "Completo y perfecto"
        }
      ],
      fecha: "2018-12-12",
      disponibles: "3"
    }
  ]

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

  clickInfo(p){
    this.navCtrl.push(this.Carrito, {producto: p});
  }

}
