import {bestMoviesQuery} from "./helpers.js"
import {getCategoryMovies} from "./category_movies.js"

let tenResults = [];
getCategoryMovies([bestMoviesQuery, "best-movies", tenResults]);
