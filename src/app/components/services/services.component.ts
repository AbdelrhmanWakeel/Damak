import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
    import * as AOS from 'aos';
@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      delay: 200, // Delay before animation starts
      once: true, // Whether the animation should only happen once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }
services = [
  {
    title: 'Branding & Identity',
    description: 'We craft distinctive brand identities that capture your company’s values.'
  },
  {
    title: 'Web Design & Development',
    description: 'From responsive websites to e-commerce solutions, we build fast, modern platforms.'
  },
  {
    title: 'Marketing & Strategy',
    description: 'Data-driven marketing strategies to grow your business online.'
  }
];
}
