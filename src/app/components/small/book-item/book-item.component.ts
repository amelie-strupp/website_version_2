import { Component, Input, OnInit } from '@angular/core';

interface Chapter{
  title: string;
  text: string;
}
@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.sass']
})
export class BookItemComponent implements OnInit {
  @Input() title = "";
  @Input() subtitle = "";
  @Input() price = "";
  @Input() isbn = "";
  @Input() href = "";
  @Input() image = "";
  @Input() chapterList: Array<Chapter> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
