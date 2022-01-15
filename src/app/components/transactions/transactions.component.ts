import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Block } from 'src/app/interfaces/block.interface';
import { Tx } from 'src/app/interfaces/tx.interface';
import { BlockchainServie } from './../../services/blockchain/blockchain.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private blockchain: BlockchainServie
  ) {}

  hash: string;
  block: Block;
  txs: Tx[];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.hash = params.get('hash') ?? '';
      if (this.hash) {
        this.block = this.blockchain.getBlockByHash(this.hash);
        this.txs = typeof this.block.data === 'string' ? [] : this.block.data;
      } else {
        this.blockchain.getTxMemoryPool().subscribe((txs) => (this.txs = txs));
      }
    });
  }
}
