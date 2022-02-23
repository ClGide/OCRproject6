import {bestSciFiMoviesQuery} from "./helpers.js"
import {getCategoryMovies} from "./category_movies.js"


let tenResults = [];
let sevenResultsModal = [];
getCategoryMovies([bestSciFiMoviesQuery, "scifi--pres", tenResults, sevenResultsModal]);

