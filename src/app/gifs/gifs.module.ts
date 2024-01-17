import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';




@NgModule({
  declarations: [],
  providers:[],
  imports: [
    CommonModule, HomePageComponent,
  ],
  exports: [HomePageComponent,]
})
export class GifsModule { }
