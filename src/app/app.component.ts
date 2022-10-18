import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nomeCartao: string = ''
  numCartao: number = 0
  mes: number = 0
  ano: number = 0
  cvc: number = 0
  // title = 'data-binding';
  // n1: number = 0
  // n2: number = 0

  // soma(x: number, y:number){
  //   return x + y;
  // }

  // tipoInput: string = 'password'
  
  // mudarTipoDoInput(): void {
  //   if (this.tipoInput == 'password'){
  //     this.tipoInput = 'text'
  //   } else {
  //     this.tipoInput = 'password'
  //   }
  // }
}
