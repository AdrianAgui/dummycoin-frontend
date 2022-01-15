export interface BlocksData {
  length: number;
  blocks: Block[];
}

export interface Block {
  timestamp: Date;
  hash: string;
  previousHash: string;
  data: string;
  nonce: number;
  difficulty: number;
  date: Date;
}
