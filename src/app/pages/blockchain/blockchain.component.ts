import { Component, OnInit } from '@angular/core';
import { Block } from 'src/app/interfaces/block.interface';
import { BlockchainService } from './../../services/blockchain/blockchain.service';
import { ToastrService } from 'ngx-toastr';
import { WalletService } from './../../services/wallet/wallet.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {
  blocks: Block[] = [];

  constructor(
    private blockchainService: BlockchainService,
    private toastr: ToastrService,
    private wallet: WalletService
  ) {}

  ngOnInit(): void {
    this.getBlocks(false);
    this.blockchainService.refreshBlocks$.subscribe(() => this.getBlocks(true));
  }

  mine() {
    this.blockchainService.mineBlock().subscribe({
      next: (data) => {
        if (data.error) {
          this.toastr.error('Memory pool is empty');
        } else {
          this.toastr.success('Block mined correctly');
          this.wallet.$refreshBalance.next(true);
          this.blockchainService.refreshBlocks$.next(true);
          this.blockchainService.cleanTxs();
        }
      },
      error: () => this.toastr.error('Error mining new block')
    });
  }

  private getBlocks(refresh: boolean) {
    this.blockchainService.getBlocks(refresh).subscribe((blocks: Block[]) => {
      this.blocks = blocks.map((block) => {
        return { ...block, date: new Date(block.timestamp) };
      });
    });
  }
}
