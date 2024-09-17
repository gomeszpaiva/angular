import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componentluno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentluno.component.html',
  styleUrl: './componentluno.component.css'
})
export class ComponentlunoComponent {
  items = [
    { id: 1, nome: 'Daniela', idade: '18', sexo: 'Feminino', serie: "3 ano"},
    { id: 2, nome: 'Dani', idade: '18', sexo: 'Fminino', serie: "2 ano"},
    { id: 3, nome: 'danielly', idade: '61', sexo: 'Feminino', serie: "1 ano"},
    { id: 4, nome: 'ana', idade: '24', sexo: 'feminino', serie: "9 ano"},
  ];
}
