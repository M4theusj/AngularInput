import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  imports: [],
  templateUrl: './aleatorio.component.html',
  styleUrl: './aleatorio.component.css'
})
export class AleatorioComponent {
  @Input() valorMin: number =0;
  @Input() valorMax: number =0;

  @Output() resultado = new EventEmitter(); // devolve o resultado para quem chamou
  gerar(){
    var valor = Math.floor(Math.random() * (this.valorMax- this.valorMin+ 1)) + this.valorMin;
    this.resultado.emit(valor);
  }
}
