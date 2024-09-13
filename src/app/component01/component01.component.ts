import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component01',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component01.component.html',
  styleUrl: './component01.component.css'
})
export class Component01Component {
  name:string = 'Daniela'
  isDisabled:boolean = false
  image01:string = './app/assets/imagem01.png'

  alerta(){
    alert("clicked")
    this.isDisabled = true
  }

  troca(){
    if(this.name === 'Daniela'){
      this.name = 'emilly'
    }
    else{
      this.name = 'Daniela'
    }
}

isActive: boolean = true

}
