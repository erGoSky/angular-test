import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminGuard} from "./admin.guard";

const routes: Routes = [{path:"admin", component:AdminComponent, canActivate: [AdminGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminGuard]
})
export class AdminRoutingModule { }
