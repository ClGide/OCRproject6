import {API_URL, short_URL, bestMoviesQuery, getHTML} from "./helpers.js"


getBestMovie(API_URL + "1" + bestMoviesQuery);

function getBestMovie(url) {
    fetch(url)
    .then(res => res.json())
    .then(getDetailsAndShowBestMovie)
    
}


function getDetailsAndShowBestMovie(data) {
    const bestMovieId = data.results[0]["id"];

    fetch(short_URL + bestMovieId)
    .then(res => res.json())
    .then(showBestMovie)

}


function showBestMovie(bestMovieResult) {
    
    const {title, image_url, description} = bestMovieResult;
     
    const {imageEl, titleEl, summaryEl} = getHTML("best-movie", 1);
            
    imageEl.src = image_url;
    titleEl.innerHTML = title;
    const summary = description;
    const summaryNode = document.createTextNode(summary);
    summaryEl.appendChild(summaryNode);

    // Some values are returned as undefined by the API.
    const {
        genres, date_published, rated, imdb_score, 
        directors, actors, duration, countries, 
        worlwide_gross_income, long_description} = bestMovieResult;
    
}
 

