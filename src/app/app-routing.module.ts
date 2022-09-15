import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompletedComponent} from "./completed/completed.component";
import {DeletedComponent} from "./deleted/deleted.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  { path: 'completed', component: CompletedComponent },
  { path: 'deleted', component: DeletedComponent },
  { path: 'todo', component: IndexComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
