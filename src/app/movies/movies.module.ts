import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './component/movie-item/movie-item.component';

@NgModule({
  declarations: [MovieItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MovieItemComponent
  ]
})
export class MoviesModule { }
