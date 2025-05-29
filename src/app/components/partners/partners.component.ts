import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PartnersComponent {
  partners = [
    { name: 'General Electric', logo: '/general.PNG' },
    { name: 'ADNOC', logo: '/ADNOC.png' },
    { name: 'Saudi Water Authority', logo: '/SWA.png' },
    { name: 'Nation Water Company', logo: '/water.png' },
    { name: 'Siemens', logo: '/Siemens.png' },
    { name: 'Al Bawani', logo: '/albawani.png' }

  ];
}