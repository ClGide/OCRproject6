
# UI displaying best-rated movies from IMDB.

The following Python code is the project 6 of my Open ClassRooms path. The goal is to fetch data from an REST API using a local server. The data is then displayed on a user interface. 

## 🔧 SET UP 

It is necessary to have pipenv already installed on your python installation. If pipenv is not already installed on your computer, refer to this [page](https://pipenv.pypa.io/en/latest/#install-pipenv-today).

1) Clone this repository using $ git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git (you can also download the code using as a zip file).
2) Move to the ocmovies-api root folder with $ cd ocmovies-api-en.
3) Install project dependencies with pipenv install.
4) Create and populate project database with pipenv run python manage.py create_db.
5) Fork the repository. 
6) Run the server with pipenv run python manage.py runserver.

Steps 1-5 are only required for initial installation. For subsequent launches of the API, you only have to execute step 6 from the root folder of the project. Once the API is running, you can see the page by opening index.html with any modern browser. 


## 📄 Description 

The webpage will display 29 movies. The best rated movie is pinned up at the center. Below, four categories (best movies, thriller, scifi, drama) are displayed. 
Each category contains seven movies. Those movies are the best rated movies in their genre from IMDB.
Beyond the title and summary that you can read below each movie image, the see info button opens a modal window. This modal window displays more detailed data on the movie as the actors, the duration or a longer description. 

If you want to see what happens below the curtains, category_movies.js and best_movies.js are responsible for the fetching and the DOM. Both files' documentation is complete. 

# 👷‍♂️ Contributors

Gide Rutazihana, student, giderutazihana81@gmail.com 
Ashutosh Purushottam, mentor

# License

 There's no license 
