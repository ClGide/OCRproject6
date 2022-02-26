import {API_URL, short_URL, getHTML} from "./helpers.js"
export {filterResponseRetrieveIds, getCategoryMovies, fetchDetailsShowMovies}

 
async function fetchDetails (sevenIds) {
    let results = [] 
    for (let id of sevenIds) {
        results.push(
            fetch(short_URL + id)
            .then(res => res.json())
        )
    }
    return Promise.all(results)
}


function filterResponseRetrieveIds (data, tenResults) {
    tenResults.push(data);
    if (tenResults.length === 2) {
        let tenResultsFlat = Array.prototype.concat(tenResults[0], tenResults[1]);
        let sevenResults = tenResultsFlat.slice(0, 7);
        let ids = sevenResults.map(result => result['id']);
        return ids
    }
}


function getCategoryMovies(queryAndCatAndRes) {

    for (let i = 1; i<3; i++) { 
        let query, category, tenResults;
        [query, category, tenResults] = queryAndCatAndRes;

        fetch(API_URL + String(i) + query)
        .then(res => res.json())
        .then(data => {
        let sevenIds = filterResponseRetrieveIds(data.results, tenResults);   
            if (tenResults.length === 2) {
                return  [sevenIds, category];
            } else {
                return ["not done yet", "not done yet"];
            }
        })
        .then(fetchDetailsShowMovies)
    }
}

function showMoviesPres (result, category) {
    result.forEach((element, index) => {
        const{title, image_url, description} = element;
        const {imageEl, titleEl, summaryEl} = getHTML(category, index+1);

        imageEl.src = image_url;
        titleEl.innerHTML = title;

        const summary = description;
        const summaryNode = document.createTextNode(summary);
        summaryEl.appendChild(summaryNode);
    })
}

function showMoviesModal (result, category) {
    result.forEach((element, index) => {
        const {
            genres, description, date_published, rated,
            imdb_score, directors, actors, duration, 
            countries, worldwide_gross_income, long_description
        } = element

    })
    
}

async function fetchDetailsShowMovies(ResAndCat) {
    let sevenIds = ResAndCat[0]
    let category = ResAndCat[1]
    if (sevenIds !== "not done yet") {
        let result = await fetchDetails(sevenIds)
        showMoviesPres(result, category)  
        showMoviesModal(result, category) 
    } else {
        console.log("waiting for the second row of fetches")
    } 
};

