import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MemoryPoolComponent } from './memory-pool/memory-pool.component';



@NgModule({
  declarations: [
    BlockchainComponent,
    TransactionsComponent,
    MemoryPoolComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
