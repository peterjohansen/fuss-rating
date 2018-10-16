import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HomeRouterModule} from './home.route';
import {HomeComponent} from './home.component';


@NgModule({
  imports: [HomeRouterModule, FormsModule, ReactiveFormsModule, CommonModule, SharedModule],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {
}
