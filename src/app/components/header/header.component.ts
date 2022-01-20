import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCopy, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { WalletService } from './../../services/wallet/wallet.service';
import { ToastrService } from 'ngx-toastr';

declare const bootstrap: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private wallet: WalletService,
    private toastr: ToastrService
  ) {}

  logged = false;
  address: string;
  visualAddress: string;
  balance: number;

  faCopy = faCopy;
  faLogOut = faSignOutAlt;

  ngOnInit(): void {
    this.wallet.$logged.subscribe((isLogged) => {
      this.logged = isLogged;
      if (isLogged) {
        this.address = this.wallet.getAddress();
        this.balance = this.wallet.getBalance();
        this.visualAddress =
          this.address.substring(0, 6) +
          '...' +
          this.address.slice(this.address.length - 6);
        this.initBootstrapTooltips();
      }
    });

    this.wallet.$updateBalance.subscribe(
      (currentBalance) => (this.balance = currentBalance)
    );
  }

  logout() {
    this.wallet.logout();
  }

  createWallet() {
    this.wallet.createWallet().subscribe((wallet) => {
      this.wallet.login(wallet.publicKey).subscribe();
    });
  }

  navigateToBlockchain() {
    this.router.navigate(['blockchain']);
  }

  clipboardAddressCopy() {
    navigator.clipboard.writeText(this.address);
    this.toastr.info('Address copied to clipboard!');
  }

  private initBootstrapTooltips() {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}
