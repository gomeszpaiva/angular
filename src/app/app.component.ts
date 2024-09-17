import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component01Component } from './component01/component01.component';
import { ComponentngifComponent } from './componentngif/componentngif.component';
import { ComponentngforComponent } from './componentngfor/componentngfor.component';
import { ComponentlunoComponent } from './componentluno/componentluno.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component01Component, ComponentngifComponent, ComponentngforComponent, ComponentlunoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moto-angular';
}
