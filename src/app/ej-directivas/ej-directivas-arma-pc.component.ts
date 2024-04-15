import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ej-directivas-arma-pc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ej-directivas-arma-pc.component.html',
  styleUrl: './ej-directivas-arma-pc.component.css'
})
export class EjDirectivasArmaPCComponent {

  //Arma tu pc
     ramSize = [{id: 1, nombre: "RAM32"}, {id:2, nombre:"RAM16"},{id:3, nombre:"RAM8"}];
     ramElegida: string = "";

     tipoProcesador= [{id: 1, nombre: "Corei9N9"}, {id:2, nombre:"Corei7"},{id:3, nombre:"Corei5"}]; 
     procesadorElegido: string = "";

     tarjetaGrafica:boolean = true;

     discosDuros = [{id: 1, nombre: "HDD"}, {id:2, nombre:"SSD"}];
     discoElegido: string = "";

     fuentesAlimentacion = [{id: 1, nombre: "600"}, {id:2, nombre:"750"},{id:3, nombre:"800+"}];
     fuenteElegida: string = "";

     imprimir():void{

      console.log("RAM:" + this.ramElegida +"\nProcesador:" + this.procesadorElegido +"\nTarjeta grafica?"+ this.tarjetaGrafica +"\nDisco Duro:" + this.discoElegido 
      +"\nFuente:" + this.fuenteElegida);
     }

     //Reserva de vuelos
     origen = [{id: 1, nombre: "Madrid"}, {id:2, nombre:"Barcelona"},{id:3, nombre:"Softtek"}];
     origenElegido: string = "";

     destinos = [{id: 1, nombre: "Madrid"}, {id:2, nombre:"Barcelona"},{id:3, nombre:"Softtek"}];
     destinoElegido: string = "";

     //fechas = [{id: 1, nombre: "11/04/2024"}, {id:2, nombre:"12/04/2024"},{id:3, nombre:"13/04/24"}];
     fechaElegidaIda: string = "";
     fechaElegidaVuelta: string = "";
     numPasajeros:number = 0;

     mostrarDatosVuelo():void{
      console.log("Origen: " + this.origenElegido +"\nDestino: " + this.destinoElegido +"\nFecha ida: " + this.fechaElegidaIda +"\nFecha vuelta: " + this.fechaElegidaVuelta + 
      "Número de pasajeros: " + this.numPasajeros)
     }

     //Uso directivas(ejercicio directivas 3)
     genero = [{id: 1, nombre: "Mujer"}, {id:2, nombre:"Hombre"},{id:3, nombre:"Otros"}];
     generoElegido:string = "";

     nacionalidades = [{id: 1, nombre: "Español"}, {id:2, nombre:"Portugal"},{id:3, nombre:"Francia"}];
     nacionalidadElegida: string = "";

     lenguajesProgramacion = [{id: false, nombre: "C++"}, {id:false, nombre:"Java"}, {id:false, nombre:"JS"}, {id:false, nombre:"Python"}];
     lenguajeSeleccionado:string = "";

     mostrarDatosPersona():void{
      console.log("Género: " + this.generoElegido +"\nNacionalidad: " + this.nacionalidadElegida + "\nLenguajes: ");

      for(let i = 0; i <this.lenguajesProgramacion.length; i++){

        if(this.lenguajesProgramacion[i].id == true){

          console.log(this.lenguajesProgramacion[i].nombre)
        }
        
      }
     }

  

}
