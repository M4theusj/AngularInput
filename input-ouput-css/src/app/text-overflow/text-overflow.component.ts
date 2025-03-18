import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  imports: [],
  templateUrl: './text-overflow.component.html',
  styleUrl: './text-overflow.component.css'
})
export class TextOverflowComponent {
  @Input() texto = "O texto sera cortado bem legal..."
  @Input() titulo = "O titulo"
  @Input() clip: boolean = true
}