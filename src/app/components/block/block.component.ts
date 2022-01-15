import { Component, Input } from '@angular/core';
import { Block } from 'src/app/interfaces/block.interface';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent {
  @Input() id!: number;
  @Input() data!: Block;
}
