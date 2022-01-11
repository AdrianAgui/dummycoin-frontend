import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BlockComponent } from './block/block.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BlockComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, BlockComponent]
})
export class ComponentsModule {}
