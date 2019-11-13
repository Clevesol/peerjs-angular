import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewComponent} from './view/view.component';

const routes: Routes = [{
	path : '',
	component : ViewComponent,
	pathMatch: 'full'

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
