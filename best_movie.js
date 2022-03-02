import {API_URL, short_URL, bestMoviesQuery, getHTML, getHTMLModalWindow} from "./helpers.js"

getBestMovie(API_URL + "1" + bestMoviesQuery);

/**
 * 
 * @param {String} url used to make the request to OCMovies API. 
 */
function getBestMovie(url) {
    fetch(url)
    .then(res => res.json())
    .then(getDetailsAndShowBestMovie)
    
}


/**
 * Retrieves the ID key from the response object. Makes a request to
 * get detailed data about that object. Then, inserts that data 
 * in the HTML through the function showBestMovie. 
 * 
 * @param {Object} data the response containing summary data 
 * on the movie on IMDB. 
 */
function getDetailsAndShowBestMovie(data) {
    const bestMovieId = data.results[0]["id"];

    fetch(short_URL + bestMovieId)
    .then(res => res.json())
    .then(showBestMovie)

}

/**
 * Uses getHTML and getHTMLModalWindow functions to retrieve the HTML 
 * elements displaying the movie's info. Modifies those element 
 * through DOM. 
 * 
 * @param {Object} bestMovieResult contains detailed data on the 
 * highest rated movie on IMDB.
 */

function showBestMovie(bestMovieResult) {

    // Inserting data in the HTML elements corresponding to the summary
    // presentation of the movie.  

    const {title, image_url, description} = bestMovieResult;
     
    const {imageEl, titleEl, summaryEl} = getHTML("best-movie", 1);
            
    imageEl.src = image_url;
    titleEl.innerHTML = title;
    const summary = description;
    const summaryNode = document.createTextNode(summary);
    summaryEl.appendChild(summaryNode);

    // Inserting data in the HTML elements corresponding to the detailed
    // presentation of the movie.  

    const {date_published, rated, imdb_score, genres,
        directors, actors, duration, countries, 
        worldwide_gross_income, long_description} = bestMovieResult;

    const {modalImg,
        modalTitle,
        modalGenre,
        modalDate,
        modalIMDB,
        modalMPAA,
        modalDirectors,
        modalActors,
        modalDuration,
        modalCountries,
        modalBoxOffice,
        modalDescription} = getHTMLModalWindow("best-movie", 1);
    
    modalImg.src = image_url

    const titleContent = document.createTextNode(title)
    modalTitle.appendChild(titleContent)
    
    const genreContent = document.createTextNode(genres)
    modalGenre.appendChild(genreContent)

    const dateContent = document.createTextNode(date_published)
    modalDate.appendChild(dateContent)
     
    const IMDBContent = document.createTextNode(imdb_score)
    modalIMDB.appendChild(IMDBContent)

    const contentMPAA = document.createTextNode(rated)
    modalMPAA.appendChild(contentMPAA)

    const contentDirectors = document.createTextNode(directors)
    modalDirectors.appendChild(contentDirectors)

    const contentActors = document.createTextNode(actors)
    modalActors.appendChild(contentActors)

    const contentDuration = document.createTextNode(duration)
    modalDuration.appendChild(contentDuration)

    const contentCountries = document.createTextNode(countries)
    modalCountries.appendChild(contentCountries)

    const contentBoxOffice = document.createTextNode(worldwide_gross_income)
    modalBoxOffice.append(contentBoxOffice)

    const descriptionContent = document.createTextNode(long_description)
    modalDescription.appendChild(descriptionContent)

}
 
