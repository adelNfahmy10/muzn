import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { AboutUs } from "./components/about-us/about-us";
import { Packages } from "./components/packages/packages";
import { Offers } from "./components/offers/offers";
import { ContactUs } from "./components/contact-us/contact-us";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, AboutUs, Packages, Offers, ContactUs, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('muzn');
}
