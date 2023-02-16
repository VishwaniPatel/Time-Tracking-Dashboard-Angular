import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Input() title: any;
  constructor() {
    this.data = [];
    this.title = [];
  }
  ngOnInit(): void {
    
  }
}
