import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialDesignComponent } from './material-design/material-design.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { ClientViewComponent } from './client-view/client-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'md',
  },
  { path: 'md', component: MaterialDesignComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'http', component: HttpDemoComponent },
  { path: 'client-view', component: ClientViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

//export const routedComponents = [DashboardComponent, MaterialDesignComponent];

