import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checked: boolean = false;  //checkbox


  constructor() { }  //end of constructor_method

  ngOnInit(): void {
  }  //end of ngOnInit()_method


} //end of export_class
