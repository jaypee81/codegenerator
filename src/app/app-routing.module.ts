import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HubComponent } from './hub/hub.component';

const routes: Routes = [{ path: 'hub', component: HubComponent },  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
