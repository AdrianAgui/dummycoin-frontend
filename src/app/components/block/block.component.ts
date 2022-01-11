import { Component, Input, OnInit } from '@angular/core';
import { Block } from 'src/app/interfaces/block.interface';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input() data!: Block;

  ngOnInit(): void {
    console.log(this.data);
    console.log(new Date(this.data.timestamp));
  }
}
