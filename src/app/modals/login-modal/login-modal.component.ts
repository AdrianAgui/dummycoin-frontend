import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain/blockchain.service';
import { WalletService } from './../../services/wallet/wallet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  constructor(
    private blockchain: BlockchainService,
    private wallet: WalletService,
    private toastr: ToastrService
  ) {}

  login() {
    const address = (document.getElementById('address') as HTMLInputElement)
      .value;

    if (address.length === 130) {
      this.wallet.login(address).subscribe({
        next: () => this.toastr.success('Login successful'),
        error: () => this.toastr.error('Invalid Address')
      });
    } else {
      this.toastr.error(`This address doesn't exist`, 'Error');
    }
  }
}
