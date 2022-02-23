import {API_URL, bestMoviesQuery, getHTML} from "./helpers.js"

//getBestMovie(API_URL + "1" + bestMoviesQuery);

function getBestMovie(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        showBestMovie(data.results);       
    })
}

function showBestMovie(bestMovieResults) {
        const {imageEl, titleEl, summaryEl} = getHTML("best-movie", 1);
        const {title, image_url} = bestMovieResults[0];
                
        imageEl.src = image_url;
        
        titleEl.innerHTML = title;
        
        //the below description should come from the server 
        const summary = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, voluptatibus eos eligendi nulla
        inventore consectetur laudantium. Qui illum voluptate, laborum ducimus perferendis hic veniam voluptatum 
        iste totam reprehenderit harum dolor deserunt? Ab alias tempore dignissimos quas repudiandae. Optio 
        laboriosam, ipsum iusto, necessitatibus, magni tempore deleniti quae a laudantium voluptatibus dolorem.`
        const summaryNode = document.createTextNode(summary);
        summaryEl.appendChild(summaryNode);
}
 
function showMovieDetails(data) {
    data.forEach(element => {
        const {image, title, genre, year} = element;
    })
}

