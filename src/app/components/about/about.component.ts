import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
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
}
