import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  params$;
  movieId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.params$ = this.route.paramMap
      .subscribe(paramsMap => {
        this.movieId = paramsMap.get('id');
      });
  }

  ngOnDestroy() {
    this.params$.unsubscribe();
  }
}
