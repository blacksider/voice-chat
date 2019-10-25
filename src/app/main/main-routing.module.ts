import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {MainDetailComponent} from './main-detail/main-detail.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: '', redirectTo: 'main', pathMatch: 'full'
      },
      {
        path: 'main', component: MainDetailComponent
      },
      {
        path: 'server', loadChildren: () => import('../server/server.module').then(m => m.ServerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
