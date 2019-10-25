import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {MainRoutingModule} from './main-routing.module';
import {FormsModule} from '@angular/forms';
import {MainDetailComponent} from './main-detail/main-detail.component';
import {ServerService} from './server.service';

@NgModule({
  declarations: [
    MainComponent,
    MainDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  providers: [
    ServerService
  ]
})
export class MainModule {
}
