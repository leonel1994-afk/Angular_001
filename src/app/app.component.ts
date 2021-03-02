import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular001';
  diaSemana: string ='Martes_2_de_marzo_2021';
  nombre = 'Luis';
  apellido='Torres';

  cadenaTexto: string='Su nombre';
 sumar(x:number, y:number){
   return x + y; 
 }

 mostrarMensaje(){
   return 'Cadena de texto';
}

}
