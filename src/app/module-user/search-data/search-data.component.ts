import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnInit {


   public valueText!: string;

  constructor() { }

   

  ngOnInit(): void {
    console.log(this.valueText)
  }

  

}
