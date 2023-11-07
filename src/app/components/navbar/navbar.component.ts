import { Component, OnInit } from '@angular/core';
import { faBell, faInfoCircle, faClose} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  faInfoCircle = faInfoCircle;
  faBell = faBell;
  faClose = faClose;

  isOpen = false;
  isOpendBody = false;

  constructor() { }
  
  ngOnInit(): void {
  }
}
