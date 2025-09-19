import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'], // Corrected
})
export class App {
  protected title = 'zp_yavatmal';
}
