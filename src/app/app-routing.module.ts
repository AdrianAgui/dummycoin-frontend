import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlockchainComponent } from './pages/blockchain/blockchain.component';
import { MemoryPoolComponent } from './pages/memory-pool/memory-pool.component';

const routes: Routes = [
  {
    path: 'blockchain',
    component: BlockchainComponent
  },
  {
    path: 'memorypool',
    component: MemoryPoolComponent
  },
  { path: '**', component: BlockchainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
