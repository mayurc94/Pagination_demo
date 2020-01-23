import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Input } from '@angular/core';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{
  config: any;
  public games: any;
  p: number = 1;
  

  constructor() {
    this.config = {
      itemsPerPage:3,
      currentPage: 1,
      totalItems: 20
    };
    console.log("am here");
  }
  
  selectChangeHandler(event: any) {
    this.config.itemsPerPage = event.target.value;

    console.log("this is working");
    console.log(this.games.length);
   
  }

  ngOnInit() {
  this.games = [{
    "id": "1",
    "name":"DOTA2",
    "genre": "Strategy"
  },
  {
    "id": "2",
    "name":"NFS",
    "genre": "Strategy"
    },
    {
      "id": "3",
      "name": "AGe of Empires",
      "genre": "Strategy"
    },
    {
      "id": "4",
      "name": "GTA",
      "genre": "Strategy"
    },
    {
      "id": "5",
      "name": "PUBG",
      "genre": "Strategy"
    },
    {
      "id": "6",
      "name": "ANGRYBIRDS",
      "genre": "Strategy"
    },
    {
      "id": "7",
      "name": "LUDO",
      "genre": "Strategy"
    },
    {
      "id": "8",
      "name": "CRASH",
      "genre": "Strategy"
    },
    {
      "id": "9",
      "name": "IGI",
      "genre": "Strategy"
    },
    {
      "id": "10",
      "name": "MEDALOFHONOR",
      "genre": "Strategy"
    },
    {
      "id": "11",
      "name": "CANDYCRUSH",
      "genre": "Strategy"
    },
    {
      "id": "12",
      "name": "CRASH",
      "genre": "Strategy"
    },
    {
      "id": "13",
      "name": "IGI",
      "genre": "Strategy"
    },
    {
      "id": "14",
      "name": "MEDALOFHONOR",
      "genre": "Strategy"
    },
    {
      "id": "15",
      "name": "CANDYCRUSH",
      "genre": "Strategy"
    },
    {
      "id": "16",
      "name": "DOTA2",
      "genre": "Strategy"
    },
    {
      "id": "17",
      "name": "GTA",
      "genre": "Strategy"
    },
    {
      "id": "18",
      "name": "PUBG",
      "genre": "Strategy"
    },
    {
      "id": "19",
      "name": "ANGRYBIRDS",
      "genre": "Strategy"
    },
    {
      "id": "20",
      "name": "LUDO",
      "genre": "Strategy"
    },
  ]

}

  onPageChange(number: number) {
   
    this.config.currentPage = number;
  }


}
