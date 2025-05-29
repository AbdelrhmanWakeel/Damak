import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { ServicesComponent } from "./components/services/services.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PartnersComponent } from './components/partners/partners.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, ServicesComponent, PortfolioComponent, ContactComponent, PartnersComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'damak-profile';
}
