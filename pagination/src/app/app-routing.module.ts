import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'dropdown', component: DropdownComponent },
  {path:'**',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
