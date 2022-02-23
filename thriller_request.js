import {bestThrillerMoviesQuery} from "./helpers.js"
import {getCategoryMovies} from "./category_movies.js"

let tenResults = [];
let sevenResultsModal = [];
getCategoryMovies([bestThrillerMoviesQuery, "thriller--pres", tenResults, sevenResultsModal]);

