import { Component, OnInit } from '@angular/core';
import {FormsModule, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }
  onClick(data)
  {
console.log(data.email);
document.getElementById("form").innerHTML="Mr."+data.email+"   you  have successfuly logged in";

  }

}
