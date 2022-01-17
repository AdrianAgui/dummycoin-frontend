import { Component } from '@angular/core';
import { BlockchainServie } from './../../../services/blockchain/blockchain.service';
import { PostTx } from './../../../interfaces/tx.interface';

@Component({
  selector: 'app-tx-modal',
  templateUrl: './tx-modal.component.html',
  styleUrls: ['./tx-modal.component.scss']
})
export class TxModalComponent {
  constructor(private blockchain: BlockchainServie) {}

  createTx() {
    const recipient = (document.getElementById('recipient') as HTMLInputElement)
      .value;
    const amount = +(document.getElementById('amount') as HTMLInputElement)
      .value;

    if (recipient.length === 130 && amount > 0) {
      this.blockchain
        .createTx({ recipient: recipient, amount: amount } as PostTx)
        .subscribe();
    }
  }
}
