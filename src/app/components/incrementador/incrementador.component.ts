import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent {
 @Input('valor') porcentaje:number=40;
 @Input() btnClass:string="btn btn-primary";
 @Output() valor: EventEmitter<number>= new EventEmitter();
  cambiarValor (valor:number){
    if(this.porcentaje >= 100 && valor >= 0){
      this.valor.emit(100);
      return this.porcentaje = 100;
    }
    if(this.porcentaje <= 0 && valor < 0){
      this.valor.emit(0);
      return this.porcentaje = 0;
    }
    this.valor.emit(this.porcentaje);
    return this.porcentaje = this.porcentaje + valor;
  }

  onChange(even:number){
    if(even>=100){
      this.porcentaje=100;
    }else if(even<=0){
      this.porcentaje=0;
    }else{
      this.porcentaje=even;
    }
    this.valor.emit(this.porcentaje);
  }
}
