import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Principal } from './components/principal/principal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Principal],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Taskin');
}