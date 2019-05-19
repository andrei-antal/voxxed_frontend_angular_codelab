import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ImageFallbackDirective } from './directives/image-fallback.directive';
import { WordCountPipe } from './pipes/word-count.pipe';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieItemComponent, MovieListComponent, ImageFallbackDirective, WordCountPipe, MovieDetailComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MovieListComponent,
      },
      {
        path: 'new',
        component: MovieDetailComponent
      },
      {
        path: ':id',
        component: MovieDetailComponent
      }
    ])
  ],
  exports: [
    MovieListComponent
  ]
})
export class MoviesModule { }
