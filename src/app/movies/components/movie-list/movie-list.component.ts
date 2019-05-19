import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  @ViewChild('searchField') searchField;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies();
  }

  handleCommentUpdate(commentPayload) {
    this.movieService.updateComment(commentPayload.id, commentPayload.newComment);
  }

  handleMovieDelete(movieId) {
    this.movieService.deleteMovie(movieId);
  }
}
