import {API_URL, short_URL, getHTML, getHTMLModalWindow} from "./helpers.js"
export {filterResponseRetrieveIds, getCategoryMovies, fetchDetailsShowMovies}

/**
 * Gets data from the OCMOvies API, filters it and inserts it in the HTML elements
 * corresponding to a specific movie category.
 *
 * Defines two requests to the OCMOvies API. Each API response contains data on five movies.
 * The data is sufficient for a summary presentation of the movie. In order to give a more
 * elaborated presentation of each movie, a second request is needed. After that second
 * request is done for each movie, we use DOM to insert all the data in the elements
 * corresponding to the targeted category.
 *
 *
 * @param {Array} queryAndCatAndRes First item is a string used to make the request to
 * the API. Second item is a string used to retrieve the element from the HTML
 * using getHTML and getHTMLModalWindow inside showMovies function. Third item is an empty
 * array in which we will store the API responses.
 */

 function getCategoryMovies(queryAndCatAndRes) {
    for (let i = 1; i < 3; i++) {
      let query, category, tenResults;
      [query, category, tenResults] = queryAndCatAndRes;
  
      fetch(API_URL + String(i) + query)
        .then((res) => res.json())
        .then((data) => {
          // Although in the second iteration there are ten response objects in tenResults,
          // It's length is two because it contains two nested arrays.
          let sevenIds = filterResponseRetrieveIds(data.results, tenResults);
          if (tenResults.length === 2) {
            return [sevenIds, category];
          } else {
            return ["not done yet", "not done yet"];
          }
        })
        .then(fetchDetailsShowMovies);
    }
  }
  
  /**
   * Called inside the loop in the function getCategoryMovies.
   *
   * At the second iteration of the loop, fetchs detailed data about each movie in the category.
   * Then, inserts that data in the HTML through the function showMovies.
   *
   * @param {Array} ResAndCat First item is an array containing the IDs needed to request
   * details on each movie. Second item is a string used to retrieve the
   * element from the HTML using getHTML and getHTMLModalWindow inside showMovies function.
   */
  
  async function fetchDetailsShowMovies(ResAndCat) {
    let sevenIds = ResAndCat[0];
    let category = ResAndCat[1];
  
    if (sevenIds !== "not done yet") {
      let result = await fetchDetails(sevenIds);
      showMovies(result, category);
    } else {
      console.log("waiting for the second row of fetches");
    }
  }
  
  /**
   * Makes one request for detailed data per ID in the array.
   *
   * @param {Array} sevenIds Contains the IDs needed to request
   * details on each movie.
   * @returns {Promise} Returns a promise that resolves only when
   * the seven requests are fulfilled. The resolved promise contains
   * seven response objects.
   */
  
  async function fetchDetails(sevenIds) {
    let results = [];
    for (let id of sevenIds) {
      results.push(fetch(short_URL + id).then((res) => res.json()));
    }
    return Promise.all(results);
  }
  
  /**
   * Inserts the fetched data about the seven movies in the HTML elements
   * corresponding to the movies' category.
   *
   * @param {Array} result Seven response objects. Each object contains
   * comprehensive data on the movie.
   * @param {String} category The name of the category. Used to retrieve the
   * element from the HTML using getHTML and getHTMLModalWindow.
   */
  
  function showMovies(result, category) {
    result.forEach((element, index) => {
      // Inserting data in the HTML elements corresponding to the summary
      // presentation of each movie.
  
      const { title, image_url, description } = element;
      const { imageEl, titleEl, summaryEl } = getHTML(category, index + 1);
  
      imageEl.src = image_url;
      titleEl.innerHTML = title;
  
      const summary = description;
      const summaryNode = document.createTextNode(summary);
      summaryEl.appendChild(summaryNode);
  
      // Inserting data in the HTML elements corresponding to the detailed
      // presentation of each movie.
  
      const {
        genres,
        date_published,
        rated,
        imdb_score,
        directors,
        actors,
        duration,
        countries,
        worldwide_gross_income,
        long_description,
      } = element;
  
      const {
        modalImg,
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
        modalDescription,
      } = getHTMLModalWindow(category, index + 1);
  
      modalImg.src = image_url;
  
      const titleContent = document.createTextNode(title);
      modalTitle.appendChild(titleContent);
  
      const genreContent = document.createTextNode(genres);
      modalGenre.appendChild(genreContent);
  
      const dateContent = document.createTextNode(date_published);
      modalDate.appendChild(dateContent);
  
      const IMDBContent = document.createTextNode(imdb_score);
      modalIMDB.appendChild(IMDBContent);
  
      const contentMPAA = document.createTextNode(rated);
      modalMPAA.appendChild(contentMPAA);
  
      const contentDirectors = document.createTextNode(directors);
      modalDirectors.appendChild(contentDirectors);
  
      const contentActors = document.createTextNode(actors);
      modalActors.appendChild(contentActors);
  
      const contentDuration = document.createTextNode(duration);
      modalDuration.appendChild(contentDuration);
  
      const contentCountries = document.createTextNode(countries);
      modalCountries.appendChild(contentCountries);
  
      const contentBoxOffice = document.createTextNode(worldwide_gross_income);
      modalBoxOffice.append(contentBoxOffice);
  
      const descriptionContent = document.createTextNode(long_description);
      modalDescription.appendChild(descriptionContent);
    });
  }
  
  /**
   * Called inside the loop in the function getCategoryMovies.
   *
   * @param {*} data 1st iteration. five response objects stored in a array.
   * 2nd iteration. five response objects stored in a array.
   * @param {Array} tenResults 1st iteration. An empty array.
   * 2nd iteration. the same array containing the data from the previous iteration.
   * @returns {*} 1st iteration. undefined.
   * 2nd iteration. An Array. Contains the ID property of each of the first
   * seven response objects.
   */
  
  function filterResponseRetrieveIds(data, tenResults) {
    tenResults.push(data);
    if (tenResults.length === 2) {
      let tenResultsFlat = Array.prototype.concat(tenResults[0], tenResults[1]);
      let sevenResults = tenResultsFlat.slice(0, 7);
      let ids = sevenResults.map((result) => result["id"]);
      return ids;
    }
  }
  
