import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthContainerComponent } from './pages/auth/auth-container/auth-container.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet,
      AuthContainerComponent,
      HomeComponent
    ]
})
export class AppComponent {
  title = 'catancito-front';
}
