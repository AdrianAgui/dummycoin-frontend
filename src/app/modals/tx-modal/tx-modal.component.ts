import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostTx } from 'src/app/interfaces/tx.interface';
import { BlockchainService } from 'src/app/services/blockchain/blockchain.service';
import { WalletService } from './../../services/wallet/wallet.service';

@Component({
  selector: 'app-tx-modal',
  templateUrl: './tx-modal.component.html',
  styleUrls: ['./tx-modal.component.scss']
})
export class TxModalComponent {
  constructor(
    private blockchain: BlockchainService,
    private toastr: ToastrService,
    private wallet: WalletService
  ) {}

  createTx() {
    const recipient = (document.getElementById('recipient') as HTMLInputElement)
      .value;
    const amount = +(document.getElementById('amount') as HTMLInputElement)
      .value;

    if (recipient.length === 130 && amount > 0) {
      this.blockchain
        .createTx({
          sender: this.wallet.getAddress(),
          recipient: recipient,
          amount: amount
        } as PostTx)
        .subscribe(() => {
          this.blockchain.refreshTxs$.next(true);
          this.toastr.success(
            `You send ${amount} $DUM tokens`,
            'Transaction successful'
          );
        });
    } else {
      this.toastr.error(
        `The address must contain 130 characters and the amount must be greater than 0`,
        'Error'
      );
    }
  }
}
