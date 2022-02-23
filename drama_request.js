import {bestDramaMoviesQuery} from "./helpers.js"
import {getCategoryMovies} from "./category_movies.js"


let tenResults = [];
let sevenResultsModal = [];
getCategoryMovies([bestDramaMoviesQuery, "drama--pres", tenResults, sevenResultsModal]);
