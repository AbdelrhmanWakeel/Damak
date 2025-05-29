import { Component } from '@angular/core';
    import * as AOS from 'aos';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

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
}
