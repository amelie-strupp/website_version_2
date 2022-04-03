import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-audiobook-item',
  templateUrl: './audiobook-item.component.html',
  styleUrls: ['./audiobook-item.component.sass']
})
export class AudiobookItemComponent implements OnInit {
  @Input() title = "";
  @Input() subtitle = "";
  @Input() price = "";
  @Input() image = "";
  constructor() { }

  ngOnInit(): void {
  }

}
