import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keywords:string;

  constructor() { }

  ngOnInit(): void {
  }

  doSearch(){
    console.log(this.keywords);
  }
}
