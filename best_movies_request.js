import {bestMoviesQuery} from "./helpers.js"
import {getCategoryMovies} from "./category_movies.js"

let tenResults = [];
let sevenResultsModal = [];
getCategoryMovies([bestMoviesQuery, "best-movies--pres", tenResults, sevenResultsModal]);
