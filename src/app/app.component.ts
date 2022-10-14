import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  n1: number = 0
  n2: number = 0

  soma(x: number, y:number){
    return x + y;
  }

  tipoInput: string = 'password'
  
  mudarTipoDoInput(): void {
    if (this.tipoInput == 'password'){
      this.tipoInput = 'text'
    } else {
      this.tipoInput = 'password'
    }
  }
}
