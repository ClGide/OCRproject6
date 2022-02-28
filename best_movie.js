import {API_URL, short_URL, bestMoviesQuery, getHTML, getHTMLModalWindow} from "./helpers.js"

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

    // I am not splitting up this function because I am using the
    // title and image identifier for the presentation and the modal
    // window. If I try to define them in another function in the 
    // module, I get the identifier already defined error. If I try 
    // define the function in another module, I get the 404ERROR on the import. 

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
 
