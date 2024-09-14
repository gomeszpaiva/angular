import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componentngif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentngif.component.html',
  styleUrl: './componentngif.component.css'
})
export class ComponentngifComponent {
  visivel:boolean = false;

  abrir(){
    if(this.visivel == false){
      this.visivel = true;
    }
    else{
      this.visivel = false;
    }
  }
  
  // exibir: boolean = true;
  // acao(){
  //   if(this.exibir === true){
  //     this.exibir = false;
  //   }
  //   else{
  //     this.exibir = true;
  //   }
  // }
}
