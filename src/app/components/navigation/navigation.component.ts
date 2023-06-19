import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isOpen = false;

  constructor(private router: Router) {

  }
  open = () => {
    this.isOpen = true;
  }
  close = () => {
    this.isOpen = false;
  }
  scroll(str: string) {
    this.router.navigate(['home']).then(() => {
      let el = document.getElementById(str);
      if (el) {
        el.scrollIntoView({behavior: 'smooth'})
      }
    })
  }
}
