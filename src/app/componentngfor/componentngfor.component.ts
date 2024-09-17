import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componentngfor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentngfor.component.html',
  styleUrl: './componentngfor.component.css'
})
export class ComponentngforComponent {
  items = [
    { id: 1, name: 'Item 1', description: 'Descrição do item 1' },
    { id: 2, name: 'Item 2', description: 'Descrição do item 2' },
    { id: 3, name: 'Item 3', description: 'Descrição do item 3' },
  ];
}
