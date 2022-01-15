import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { map, Observable, of } from 'rxjs';
import { Block, BlocksData } from 'src/app/interfaces/block.interface';

const url = 'https://dummycoin.herokuapp.com';
const path = '/api/v1';

const getBlocksEndpoint = `${url}${path}/blocks`;

@Injectable({
  providedIn: 'root'
})
export class BlockchainServie {
  private blocks: Block[] = [];

  constructor(private apiService: ApiService) {}

  getBlocks(refresh?: boolean): Observable<Block[]> {
    return this.blocks.length === 0 || refresh
      ? this.getFromApi().pipe(map((data) => (this.blocks = data.blocks)))
      : this.getFromCache();
  }

  private getFromCache() {
    return of(this.blocks);
  }

  private getFromApi() {
    return this.apiService.get<BlocksData>(
      getBlocksEndpoint
    ) as Observable<BlocksData>;
  }
}
