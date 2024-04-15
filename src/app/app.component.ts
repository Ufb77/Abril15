import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Abril15EjerciciosTypeScriptComponent } from './abril15-ejercicios-type-script/abril15-ejercicios-type-script.component';
import { EjDirectivasArmaPCComponent } from './ej-directivas/ej-directivas-arma-pc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Abril15EjerciciosTypeScriptComponent, EjDirectivasArmaPCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril15';
}
