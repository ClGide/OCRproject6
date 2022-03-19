export {
  API_URL,
  short_URL,
  bestMoviesQuery,
  bestThrillerMoviesQuery,
  bestSciFiMoviesQuery,
  bestDramaMoviesQuery,
  getHTML,
  getHTMLModalWindow,
};

// Strings used to write the request to OCMovies-API.
const API_URL = "http://localhost:8000/api/v1/titles/?page=";
const short_URL = "http://localhost:8000/api/v1/titles/";
const bestMoviesQuery = "&sort_by=-imdb_score";
const bestThrillerMoviesQuery = "&genre=thriller&sort_by=-imdb_score";
const bestSciFiMoviesQuery = "&genre=Sci-fi&sort_by=-imdb_score";
const bestDramaMoviesQuery = "&genre=Drama&sort_by=-imdb_score";

// In order to explain the working of the below two functions, lets describe the
// structure of the HTML. It's purpose is to contain data about 29 movies. The
// 29 movies are ordered in five categories. The first one only contains
// the best movie. The other contain seven movies each. For each movie, there
// is a quick presentation and a detailed presentation. The elements doing the
// quick presentation are retrieved by getHTML. The elements doing the detailed
// presentation are retrieved by getModalHTML.

/**
 *
 * @param {String} category
 * @param {String} number from 1 to 7, allows to target one specific movie.
 * @returns {Object} three HTML elements corresponding to the title, the
 * image and the summary of the movie.
 */

function getHTML(category, number) {
  const imageEl = document.getElementsByClassName(
    `${category}--pres${number}--image`
  )[0];
  const titleEl = document.getElementsByClassName(
    `${category}--pres${number}--title`
  )[0];
  const summaryEl = document.getElementsByClassName(
    `${category}--pres${number}--summary`
  )[0];

  const elements = { imageEl: imageEl, titleEl: titleEl, summaryEl: summaryEl };

  return elements;
}

/**
 *
 * @param {String} category
 * @param {String} number from 1 to 7, allows to target one specific movie.
 * @returns {Object} twelve HTML elements corresponding to the title, image,
 * genre, release date, IMDB score, MPAA rating, directors, actors, duration,
 * countries, box office and long description.
 */

function getHTMLModalWindow(category, number) {
  const imgEl = document.getElementsByClassName(
    `modal--${category}${number}--image`
  )[0];
  const titleEl = document.getElementsByClassName(
    `modal--${category}${number}--title`
  )[0];
  const genreEl = document.getElementsByClassName(
    `modal--${category}${number}--genre`
  )[0];
  const dateEl = document.getElementsByClassName(
    `modal--${category}${number}--date`
  )[0];
  const IMDBEl = document.getElementsByClassName(
    `modal--${category}${number}--IMDB`
  )[0];
  const MPAAEl = document.getElementsByClassName(
    `modal--${category}${number}--MPAA`
  )[0];
  const directorsEl = document.getElementsByClassName(
    `modal--${category}${number}--directors`
  )[0];
  const actorsEl = document.getElementsByClassName(
    `modal--${category}${number}--actors`
  )[0];
  const durationEl = document.getElementsByClassName(
    `modal--${category}${number}--duration`
  )[0];
  const countriesEl = document.getElementsByClassName(
    `modal--${category}${number}--country-of-origin`
  )[0];
  const boxOfficeEl = document.getElementsByClassName(
    `modal--${category}${number}--box-office`
  )[0];
  const descriptionEl = document.getElementsByClassName(
    `modal--${category}${number}--full-description`
  )[0];

  const elements = {
    modalImg: imgEl,
    modalTitle: titleEl,
    modalGenre: genreEl,
    modalDate: dateEl,
    modalIMDB: IMDBEl,
    modalMPAA: MPAAEl,
    modalDirectors: directorsEl,
    modalActors: actorsEl,
    modalDuration: durationEl,
    modalCountries: countriesEl,
    modalBoxOffice: boxOfficeEl,
    modalDescription: descriptionEl,
  };

  return elements;
}
