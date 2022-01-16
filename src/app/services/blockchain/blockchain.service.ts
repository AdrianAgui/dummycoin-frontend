import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { map, Observable, of } from 'rxjs';
import { Block, BlocksData } from 'src/app/interfaces/block.interface';
import { Tx, TxData } from 'src/app/interfaces/tx.interface';

const url = 'https://dummycoin.herokuapp.com';
const path = '/api/v1';

const getBlocksEndpoint = `${url}${path}/blocks`;
const getTxEndpoint = `${url}${path}/transactions`;

@Injectable({
  providedIn: 'root'
})
export class BlockchainServie {
  private blocks: Block[] = [];
  private txs: Tx[] = [];

  constructor(private apiService: ApiService) {}

  getBlockByHash(hash: string): Block {
    return this.blocks.find((block) => block.hash === hash) as Block;
  }

  getBlocks(): Observable<Block[]> {
    return this.blocks.length === 0
      ? this.getBlocksFromApi().pipe(map((data) => (this.blocks = data.blocks)))
      : this.getBlocksFromCache();
  }

  getTxMemoryPool(): Observable<Tx[]> {
    return this.txs.length === 0
      ? this.getTxsFromApi().pipe(map((data) => (this.txs = data.txs)))
      : this.getTxsFromCache();
  }

  private getBlocksFromCache() {
    return of(this.blocks);
  }

  private getBlocksFromApi() {
    return this.apiService.get<BlocksData>(
      getBlocksEndpoint
    ) as Observable<BlocksData>;
  }

  private getTxsFromCache() {
    return of(this.txs);
  }

  private getTxsFromApi() {
    return this.apiService.get<TxData>(getTxEndpoint) as Observable<TxData>;
  }
}
