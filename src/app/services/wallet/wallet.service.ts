import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Wallet } from 'src/app/interfaces/wallet.interface';
import { ApiService } from './../api/api.service';

const url = 'https://dummycoin-backend.vercel.app';
const path = '/api/v1';

const getWallet = `${url}${path}/wallet`;
const postWallet = `${url}${path}/wallet`;

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  constructor(private apiService: ApiService) {
    this.updateBalanceListener();

    const address = localStorage.getItem('address');
    if (address) {
      this.login(address).subscribe();
    }
  }

  private wallet: Wallet;

  $logged = new BehaviorSubject<boolean>(false);
  $refreshBalance = new Subject<boolean>();
  $updateBalance = new Subject<number>();

  isLogged() {
    return this.$logged.value;
  }

  getAddress() {
    return this.wallet.key;
  }

  getBalance() {
    return this.wallet.currentBalance;
  }

  login(address: string) {
    return this.getWallet(address).pipe(
      tap((wallet) => {
        localStorage.setItem('address', wallet.key);
        this.wallet = wallet;
        this.$logged.next(true);
      })
    );
  }

  logout() {
    localStorage.removeItem('address');
    this.$logged.next(false);
  }

  createWallet() {
    return this.apiService.post<{ publicKey: string }>(
      postWallet,
      {}
    ) as Observable<{ publicKey: string }>;
  }

  private getWallet(address: string) {
    return this.apiService.get<Wallet>(getWallet, {
      params: { key: address }
    }) as Observable<Wallet>;
  }

  private updateBalanceListener() {
    this.$refreshBalance.subscribe(() => {
      if (this.wallet) {
        this.getWallet(this.wallet.key).subscribe((wallet) => {
          this.wallet = wallet;
          this.$updateBalance.next(wallet.currentBalance);
        });
      }
    });
  }
}
