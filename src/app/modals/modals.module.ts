import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxModalComponent } from './tx-modal/tx-modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';

@NgModule({
  declarations: [TxModalComponent, LoginModalComponent],
  imports: [CommonModule],
  exports: [TxModalComponent, LoginModalComponent]
})
export class ModalsModule {}
