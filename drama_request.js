import {bestDramaMoviesQuery} from "./helpers.js"
import {getCategoryMovies} from "./category_movies.js"


let tenResults = [];
getCategoryMovies([bestDramaMoviesQuery, "drama", tenResults]);
