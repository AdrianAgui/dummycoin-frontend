import { Component, OnInit } from '@angular/core';
import { Block } from 'src/app/interfaces/block.interface';
import { BlockchainService } from './../../services/blockchain/blockchain.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {
  blocks: Block[] = [];

  constructor(
    private blockchainService: BlockchainService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.blockchainService.getBlocks().subscribe((blocks: Block[]) => {
      this.blocks = blocks.map((block) => {
        return { ...block, date: new Date(block.timestamp) };
      });
    });
  }

  mine() {
    this.blockchainService.mineBlock().subscribe({
      next: (data) => {
        data.error
          ? this.toastr.error('Memory pool is empty')
          : this.toastr.success('Block mined correctly');
      },
      error: () => this.toastr.error('Error mining new block')
    });
  }
}
