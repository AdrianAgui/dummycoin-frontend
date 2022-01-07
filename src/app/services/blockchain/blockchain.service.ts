import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { map, Observable, of } from 'rxjs';
import { Block } from 'src/app/interfaces/block.interface';

const url = 'https://dummycoin.herokuapp.com';
const path = '/api/v1';

const getBlocksEndpoint = `${url}${path}/blocks`;

@Injectable({
  providedIn: 'root'
})
export class BlockchainServie {
  private blocks: Block[] = [];

  constructor(private apiService: ApiService) {}

  getBlocks() {
    return this.blocks.length > 0
      ? this.getFromCache()
      : this.getFromApi().pipe(map((blocks) => (this.blocks = blocks)));
  }

  private getFromCache() {
    return of(this.blocks);
  }

  private getFromApi() {
    return this.apiService.get<Block[]>(getBlocksEndpoint) as Observable<
      Block[]
    >;
  }
}
