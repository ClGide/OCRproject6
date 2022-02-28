import {bestThrillerMoviesQuery} from "./helpers.js"
import {getCategoryMovies} from "./category_movies.js"

let tenResults = [];
getCategoryMovies([bestThrillerMoviesQuery, "thriller", tenResults]);
