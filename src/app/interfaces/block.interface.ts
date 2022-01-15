import { Tx } from './tx.interface';

export interface BlocksData {
  length: number;
  blocks: Block[];
}

export interface Block {
  timestamp: Date;
  hash: string;
  previousHash: string;
  data: Tx[];
  nonce: number;
  difficulty: number;
  date: Date;
}
