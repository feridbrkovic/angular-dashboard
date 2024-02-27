import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocation, faMoneyBill, faShop, faBoxes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.scss',
})
export class TopWidgetsComponent {
  faLocation = faLocation;
  faMoneyBill = faMoneyBill;
  faShop = faShop;
  faBoxes = faBoxes;
}
