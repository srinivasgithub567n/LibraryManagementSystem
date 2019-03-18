import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BookviewsComponent } from '../bookviews/bookviews.component';

@Component({
  selector: 'app-listofbooks',
  templateUrl: './listofbooks.component.html',
  styleUrls: ['./listofbooks.component.css']
})
export class ListofbooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  book1='';
  fun1(event:any)
  {
    console.log(event.target.value);
    this.book1=event.target.value;
  }

  @ViewChild(BookviewsComponent) childdata;
  book:String;
  ngAfterViewInit()
  {
    this.book=this.childdata.book1;
  }

  displayCounter(bookinfo)
  {
    console.log("the book "+bookinfo+" has been added to  the cart")
    document.getElementById("demo").innerHTML="the book "+bookinfo+" has been added to the cart";

  }

}
