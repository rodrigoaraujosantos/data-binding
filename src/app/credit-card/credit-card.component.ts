import { Component, Input, OnInit } from '@angular/core';
import { CartaoDeCredito } from '../interfaces/CartaoDeCredito';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  @Input()// permite receber dados externos
  dadosCartao: CartaoDeCredito = {
    ano: '40',
    mes: '06',
    cvc: '123',
    nome: 'Mc Daleste',
    numero: '1234 1234 1234 1234'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
