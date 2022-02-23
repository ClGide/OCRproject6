import {API_URL, short_URL, getHTML} from "./helpers.js"
export {filterResponse, getCategoryMovies, showCategoryMovies}


function filterResponse (data, tenResults) {
    tenResults.push(data);
    if (tenResults.length === 2) {
        let tenResultsFlat = Array.prototype.concat(tenResults[0], tenResults[1]);
        let sevenResultsPres = tenResultsFlat.slice(0, 7);
        return sevenResultsPres;
    } else {
        return "not done yet"
    }
}


function getCategoryMovies(queryAndCatandTwoRes) {

    console.log(queryAndCatandTwoRes[0])
    for (let i = 1; i<3; i++) {
        fetch(API_URL + String(i) + queryAndCatandTwoRes[0])
        .then(res => res.json())
        .then(data => {
            let sevenResultsPres = filterResponse(data.results, queryAndCatandTwoRes[2]);   
            let tenResults = queryAndCatandTwoRes[2]
            if (tenResults.length === 2) {
                return  [sevenResultsPres, queryAndCatandTwoRes[1], tenResults, queryAndCatandTwoRes[3]];
            } else {
                return ["not done yet", "not done yet", tenResults, "not done yet"];
            }
        })
        .then(getCategoryMoviesDetails)
        .then(showCategoryMovies)
    }
}


function getCategoryMoviesDetails(queryAndCatandTwoRes) {
    
    let sevenResultsPres, category, tenResults, sevenResultsModal;
    [sevenResultsPres, category, tenResults, sevenResultsModal] = queryAndCatandTwoRes; 
    
    if (tenResults.length === 2) {
     sevenResultsPres.forEach(element => {
            fetch(short_URL + element['id'])
            .then(res => res.json())
            .then(data => 
                sevenResultsPres.forEach(element => {
                    element["summary"] = data["description"]
                })
            )    
            .then(element => 
                sevenResultsModal.push(element)
            )
        })
        return [sevenResultsPres, category, tenResults, queryAndCatandTwoRes[3]];
    } else {
        return ["not done yet", "not done yet", tenResults, "not done yet"];
    }
}

function collectDescriptionsAndModalRes(data) {}


function showCategoryMovies(queryAndCatandTwoRes) {

    console.log(queryAndCatandTwoRes[3])

    let sevenResultsPres, category, tenResults, sevenResultsModal;
    [sevenResultsPres, category, tenResults, sevenResultsModal] = queryAndCatandTwoRes; 
    
    if (tenResults.length === 2) {
     sevenResultsPres
        .forEach((element, index) => {
            console.log(element)  // contains summary as a key.
            console.log(element["summary"])  // logs undefined. 
            
            const {title, image_url} = element;  
            const {imageEl, titleEl, summaryEl} = getHTML(category, index+1)

            imageEl.src = image_url;
            titleEl.innerHTML = title;
            const summaryNode = document.createTextNode("lorem ipsum");
            summaryEl.appendChild(summaryNode); //adds content to the predefined one in HTML, what we want is to REPLACE it. 
        
        })
    } else {
        console.log("first fetch done")
    }
};

