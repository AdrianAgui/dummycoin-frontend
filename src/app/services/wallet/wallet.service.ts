import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  private logged = false;

  isLogged() {
    return this.logged;
  }

  private getWallet() {
    return this.apiService.get<any>(getWallet) as Observable<any>;
  }

  private createWallet() {
    return this.apiService.post<any>(postWallet, {}) as Observable<any>;
  }
}
