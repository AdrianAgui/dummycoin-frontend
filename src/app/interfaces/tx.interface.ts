export interface TxData {
  length: number;
  txs: Tx[];
}

export interface Tx {
  id: string;
  input: Input;
  outputs: Output[];
}

export interface PostTx {
  recipient: string;
  amount: number;
}

interface Input {
  address: string;
  amount: number;
  signature: any;
  timestamp: Date;
}

interface Output {
  amount: number;
  address: string;
}
