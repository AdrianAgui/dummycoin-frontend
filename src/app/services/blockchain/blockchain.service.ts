import { Injectable } from '@angular/core';
import { Observable, Subject, map, of } from 'rxjs';
import { Block, BlocksData } from 'src/app/interfaces/block.interface';
import { PostTx, Tx, TxData } from 'src/app/interfaces/tx.interface';
import { ApiService } from '../api/api.service';

const url = 'https://dummycoin-backend.vercel.app';
const path = '/api/v1';

const getBlocksEndpoint = `${url}${path}/blocks`;
const getTxEndpoint = `${url}${path}/transactions`;
const mineBlockEndpoint = `${url}${path}/mine/transactions`;
const postTxEndpoint = `${url}${path}/transaction`;

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  private blocks: Block[] = [];
  private txs: Tx[] = [];

  refreshBlocks$ = new Subject();
  refreshTxs$ = new Subject();

  constructor(private apiService: ApiService) {}

  getBlockByHash(hash: string): Block {
    return this.blocks.find((block) => block.hash === hash) as Block;
  }

  getBlocks(refresh?: boolean): Observable<Block[]> {
    return this.blocks.length === 0 || refresh
      ? this.getBlocksFromApi().pipe(map((data) => (this.blocks = data.blocks)))
      : this.getBlocksFromCache();
  }

  getTxMemoryPool(refresh?: boolean): Observable<Tx[]> {
    return this.txs.length === 0 || refresh
      ? this.getTxsFromApi().pipe(map((data) => (this.txs = data.txs)))
      : this.getTxsFromCache();
  }

  createTx(tx: PostTx): Observable<any> {
    return this.postTx(tx);
  }

  mineBlock() {
    return this.apiService.get<any>(mineBlockEndpoint) as Observable<any>;
  }

  cleanTxs() {
    this.txs = [];
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

  private postTx(txBody: PostTx) {
    return this.apiService.post<any>(postTxEndpoint, txBody) as Observable<any>;
  }
}
