import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

    num1: number = 0;
    num2: number = 0;
    resul : number = 0;


   somar(){
      this.resul = this.num1 + this.num2;
   } 

    subtrair(){
      this.resul = this.num1 - this.num2;
   }

   dividir(){
      this.resul = this.num1 / this.num2;
   }

   multiplicar(){
      this.resul = this.num1 * this.num2;
   }

   potencia() {
      this.resul = Math.pow(this.num1, this.num2);
    }
  
    raiz() {
      if (this.num1 >= 0) {
        this.resul = Math.sqrt(this.num1);
      } else {
        alert("Não é possível calcular a raiz quadrada desse número!");
      }
    }



}
