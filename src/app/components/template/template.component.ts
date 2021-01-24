import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;

    }

  `]
})
export class TemplateComponent{

  usuario:Object ={
    nombre:null,
    apellido: null,
    email: null,
    sexo:"Hombre",
    pais:"",
    acepta:false
  }

  paises=[{
      codigo:"ESP",
      nombre:"España"
    },{
      codigo:"FRA",
      nombre:"Francia"
    },{
        codigo:"ALE",
        nombre:"Alemania"
      }]

  sexos:string[]=["Hombre","Mujer"]

  acepta:string[]=["Sí","No"]

  constructor() { }


  guardar(forma:NgForm){
    console.log("Formulario posteado");
    console.log("NgFor:",forma);
    console.log("Valor:",forma.value);

    console.log("Usuario:",this.usuario);
  }

}
