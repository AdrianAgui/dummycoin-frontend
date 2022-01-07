import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BlockComponent } from './block/block.component';

@NgModule({
  declarations: [HeaderComponent, BlockComponent],
  imports: [CommonModule],
  exports: [HeaderComponent]
})
export class ComponentsModule {}
