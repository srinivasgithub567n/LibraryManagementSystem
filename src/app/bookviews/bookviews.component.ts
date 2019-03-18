import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bookviews',
  templateUrl: './bookviews.component.html',
  styleUrls: ['./bookviews.component.css']
})
export class BookviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('book1') book1:string;

  @Output() valuechange=new EventEmitter();
valuechanged()
{

  this.valuechange.emit(this.book1);
  }
}


