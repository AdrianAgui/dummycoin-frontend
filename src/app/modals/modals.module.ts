import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxModalComponent } from './tx-modal/tx-modal.component';

@NgModule({
  declarations: [TxModalComponent],
  imports: [CommonModule],
  exports: [TxModalComponent]
})
export class ModalsModule {}
