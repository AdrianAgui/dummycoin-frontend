import { Component, OnInit } from '@angular/core';
import { Block } from 'src/app/interfaces/block.interface';
import { BlockchainServie } from './../../services/blockchain/blockchain.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {
  blocks: Block[] = [];

  constructor(private blockchainService: BlockchainServie) {}

  ngOnInit(): void {
    this.blockchainService.getBlocks().subscribe((blocks: Block[]) => {
      console.log(blocks);
      this.blocks = blocks;
    });
  }
}
