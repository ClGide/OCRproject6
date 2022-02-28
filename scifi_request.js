import {bestSciFiMoviesQuery} from "./helpers.js"
import {getCategoryMovies} from "./category_movies.js"


let tenResults = [];
getCategoryMovies([bestSciFiMoviesQuery, "scifi", tenResults]);
