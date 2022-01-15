import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BlockComponent } from './block/block.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BlockComponent,
    TransactionsComponent
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BlockComponent,
    TransactionsComponent
  ]
})
export class ComponentsModule {}
