import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { WalletService } from './../../services/wallet/wallet.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private wallet: WalletService) {}

  logged = false;
  faWallet = faWallet;

  navigateToBlockchain() {
    this.router.navigate(['blockchain']);
  }
}
