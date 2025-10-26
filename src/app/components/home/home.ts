import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Login } from "../login/login";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Login],
  providers: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
