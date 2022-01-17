import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostTx } from 'src/app/interfaces/tx.interface';
import { BlockchainService } from 'src/app/services/blockchain/blockchain.service';

@Component({
  selector: 'app-tx-modal',
  templateUrl: './tx-modal.component.html',
  styleUrls: ['./tx-modal.component.scss']
})
export class TxModalComponent {
  constructor(
    private blockchain: BlockchainService,
    private toastr: ToastrService
  ) {}

  createTx() {
    const recipient = (document.getElementById('recipient') as HTMLInputElement)
      .value;
    const amount = +(document.getElementById('amount') as HTMLInputElement)
      .value;

    if (recipient.length === 130 && amount > 0) {
      this.blockchain
        .createTx({ recipient: recipient, amount: amount } as PostTx)
        .subscribe(() =>
          this.toastr.success(
            `Acabas de enviar ${amount} $DUM`,
            'Transacción correcta'
          )
        );
    } else {
      this.toastr.error(`Ha habido un fallo en la transacción`, 'Error');
    }
  }
}
