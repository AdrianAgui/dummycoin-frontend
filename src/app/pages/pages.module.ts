import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { MemoryPoolComponent } from './memory-pool/memory-pool.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { BlockTransactionsComponent } from './block-transactions/block-transactions.component';

@NgModule({
  declarations: [
    BlockchainComponent,
    MemoryPoolComponent,
    BlockTransactionsComponent
  ],
  imports: [CommonModule, RouterModule, ComponentsModule]
})
export class PagesModule {}
