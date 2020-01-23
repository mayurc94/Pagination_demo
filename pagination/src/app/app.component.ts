import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple pagination demo';
  
  config: any;
  collection = { count: 60, data: [] };

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public labels: any = {
    previousLabel: "Previous",
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };
  
  constructor() {
    for (var i = 0; i < this.collection.count; i++) {
      if (i <= 5) {
        this.collection.data.push({
          id: i + 1,
          value: "John Wick" +(i+1)
        }
        );
      }
      else {
        this.collection.data.push(
          {
            id: i + 1,
            value: "Mayur " + (i + 1)

          }
        );
      }
    }
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }

  selectChangeHandler(event: any) {

    this.config.itemsPerPage = event.target.value;
  }
}
