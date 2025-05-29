import { Component } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { HeroComponent } from '../components/hero/hero.component';
import { FooterComponent } from '../components/footer/footer.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { ServicesComponent } from '../components/services/services.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { PartnersComponent } from '../components/partners/partners.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgForOf, NavbarComponent,ContactComponent,PartnersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  services = [
    { title: 'Branding & Identity', description: 'We craft unique brand identities.' },
    { title: 'Web Design & Development', description: 'Modern, responsive websites.' },
    { title: 'Marketing & Strategy', description: 'Data-driven digital growth.' }
  ];

  portfolio = [
    { title: 'Corporate Website', description: 'Responsive and modern.', image: 'assets/images/portfolio1.jpg' },
    { title: 'Landing Page', description: 'High-converting UX.', image: 'assets/images/portfolio1.jpg' },
    { title: 'Startup Platform', description: 'End-to-end solution.', image: 'assets/images/portfolio1.jpg' }
  ];
}