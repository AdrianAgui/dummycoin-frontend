import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { MemoryPoolComponent } from './memory-pool/memory-pool.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [BlockchainComponent, MemoryPoolComponent],
  imports: [CommonModule, ComponentsModule]
})
export class PagesModule {}
