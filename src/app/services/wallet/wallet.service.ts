import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Wallet } from 'src/app/interfaces/wallet.interface';
import { ApiService } from './../api/api.service';

const url = 'https://dummycoin.herokuapp.com';
const path = '/api/v1';

const getWallet = `${url}${path}/wallet`;
const postWallet = `${url}${path}/wallet`;

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  constructor(private apiService: ApiService) {}

  private wallet: Wallet;

  $logged = new BehaviorSubject<boolean>(false);

  isLogged() {
    return this.$logged.value;
  }

  getAddress() {
    return this.wallet.key;
  }

  getBalance() {
    return this.wallet.balance;
  }

  login(address: string) {
    return this.getWallet(address).pipe(
      tap((wallet) => {
        // guardar address en sessionStorage
        // recuperar wallet al hacer f5
        this.wallet = wallet;
        this.$logged.next(true);
      })
    );
  }

  logout() {
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
}
