import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Block } from 'src/app/interfaces/block.interface';
import { Tx } from 'src/app/interfaces/tx.interface';
import { BlockchainService } from './../../services/blockchain/blockchain.service';
import { WalletService } from './../../services/wallet/wallet.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private blockchain: BlockchainService,
    private wallet: WalletService
  ) {}

  logged = false;
  hash: string;
  block: Block;
  txs: Tx[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.hash = params.get('hash') ?? '';
      if (this.hash) {
        this.blockchain.getBlocks().subscribe(() => {
          this.block = this.blockchain.getBlockByHash(this.hash);
          this.txs = typeof this.block.data === 'string' ? [] : this.block.data;
        });
      } else {
        this.logged = this.wallet.$logged.value;
        this.wallet.$logged.subscribe((isLogged) => (this.logged = isLogged));

        // When trasnaction new is done, refresh txs array
        this.blockchain.getTxMemoryPool().subscribe((txs) => (this.txs = txs));
      }
    });
  }
}
