export {API_URL, short_URL, bestMoviesQuery, bestThrillerMoviesQuery, bestSciFiMoviesQuery, bestDramaMoviesQuery, getHTML};

const API_URL = "http://localhost:8000/api/v1/titles/?page=";
const short_URL = "http://localhost:8000/api/v1/titles/";
const bestMoviesQuery = "&sort_by=-imdb_score";
const bestThrillerMoviesQuery = "&genre=thriller&sort_by=-imdb_score";
const bestSciFiMoviesQuery = "&genre=Sci-fi&sort_by=-imdb_score";
const bestDramaMoviesQuery = "&genre=Drama&sort_by=-imdb_score"


// The following gets us the elements needed from index.html. Make sure you name the categories
// accordingly in the HTML. 

function getHTML(category, number) {

    const imageEl = document.getElementsByClassName(`${category}${number}--image`)[0];
    const titleEl = document.getElementsByClassName(`${category}${number}--title`)[0];
    const summaryEl = document.getElementsByClassName(`${category}${number}--summary`)[0];

    const elements = {"imageEl":imageEl, "titleEl":titleEl, "summaryEl":summaryEl};

    return elements;
}
