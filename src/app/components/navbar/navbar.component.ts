import { Component, OnInit } from '@angular/core';
import { faBell, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  faInfoCircle = faInfoCircle;
  faBell = faBell;

  isOpen = false;
  isOpendBody = false;

  constructor() { }
  
  ngOnInit(): void {
  }
}
