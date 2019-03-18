import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick(data)
  {
console.log(data.userid);
document.getElementById("rsm").innerHTML="you account has been created successfully. Please Login to explore the Library";

  }

}
