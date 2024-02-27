import { Component } from '@angular/core';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';
import { SalesByMonthComponent } from '../sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from '../sales-by-category/sales-by-category.component';
import { LastTransactionsComponent } from '../last-transactions/last-transactions.component';
import { TopProductsComponent } from '../top-products/top-products.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TopWidgetsComponent, SalesByMonthComponent, SalesByCategoryComponent, LastTransactionsComponent, TopProductsComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
