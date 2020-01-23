import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DropdownComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
