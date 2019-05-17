import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieItemComponent } from './component/movie-item/movie-item.component';

@NgModule({
  declarations: [MovieItemComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    MovieItemComponent
  ]
})
export class MoviesModule { }
