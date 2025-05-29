import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      Aos.init({
        duration: 1200, // Animation duration in milliseconds
        easing: 'ease-in-out', // Animation easing
        delay: 200, // Delay before animation starts
        once: true, // Whether the animation should only happen once
        mirror: false, // Whether elements should animate out while scrolling past them
      });
    }
// portfolio = [
//   {
//     image: '../../assets/images/portfolio1.jpg',
//     title: 'Corporate Website',
//     description: 'A modern, responsive corporate site with branding elements.'
//   },
//   {
//     image: 'src/assets/images/portfolio1.jpg',
//     title: 'Product Landing Page',
//     description: 'Sleek UI/UX for showcasing a tech product launch.'
//   },
//   {
//     image: 'src/assets/images/portfolio1.jpg',
//     title: 'Startup Platform',
//     description: 'End-to-end web solution for a growing startup.'
//   }
// ];
}
