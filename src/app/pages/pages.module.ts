import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { MemoryPoolComponent } from './memory-pool/memory-pool.component';
import { ComponentsModule } from '../components/components.module';
import { BlockTransactionsComponent } from './block-transactions/block-transactions.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BlockchainComponent,
    MemoryPoolComponent,
    BlockTransactionsComponent
  ],
  imports: [CommonModule, RouterModule, ComponentsModule]
})
export class PagesModule {}
