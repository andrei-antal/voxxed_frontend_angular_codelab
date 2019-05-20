import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieModel$;
  movieId;
  movieModel: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.movieModel$ = this.route.paramMap
      .pipe(
        switchMap(paramsMap => {
          this.movieId = paramsMap.get('id');
          return this.movieService.getBook(this.movieId);
        })
      );
  }

  onSubmit(movieForm, movieModel) {
    const movie = {
      ...movieModel,
      ...movieForm.value
    };
    if (this.movieId) {
      this.movieService
        .updateMovie(movie)
        .subscribe(this.goBack);
    } else {
      this.movieService
        .createMovie(movie)
        .subscribe(this.goBack);
    }
  }

  goBack = () => {
    this.router.navigate(['/movies']);
  }
}
