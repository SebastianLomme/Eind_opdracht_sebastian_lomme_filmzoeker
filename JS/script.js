const filmList = document.getElementById("film-list")
const radioButton = document.querySelectorAll("input[name='search-radio'")
const mainSectionTitle = document.getElementById("main-section-title")
const searchBalk = document.getElementById("search-balk")
const radio = document.querySelectorAll("input[type=radio]")


radioButton.forEach(element => {
    element.addEventListener("change", () => {
    handleOnChangeEvent(event)
    })
})

const handleOnChangeEvent = (event) => {
    switch(event.target.value) {
        case    "alle-films":
            resetDom("Alle films")
            alleMovies()
            break;
        case    "laatste-films":
            resetDom("Laatste films")
            filterLatestMovies(2014)
            break;
        case   "avenger-films":
            resetDom("Avenger films")
            filterMovies("avenger")
            break; 
        case   "x-men-films":
            resetDom("X-Men films")
            filterMovies("x-men")
            break;
        case   "princess-films":
            resetDom("Princessen films")
            filterMovies("princess")
            break;    
        case   "batman-films":
            resetDom("Batman films")
            filterMovies("batman")
            break; 
        }
}

const makeUrl = (id) => {
    const url = `https://www.imdb.com/title/${id}/`
    return url
}

const addMoviesToDom = (movies, title, url) => {
    let ArrayLi = []
    const newLi = document.createElement("li")
    newLi.innerHTML = `<a href="${makeUrl(url)}" target="_blank"><img src=${movies} alt="${title}"></img><a>`
    newLi.classList.add("film-item")
    filmList.appendChild(newLi)

}

const alleMovies = () => {movies.map(item => 
    addMoviesToDom(item.Poster, item.Title, item.imdbID))}

alleMovies()

    // .filter(item => item.toLowerCase() === wordInMoviesTitle.includes(wordInMoviesTitle.toLowerCase()))


// beschreven in de opdracht maak een apparte array aan! 
// let mapArray = movies.map(item => item.Poster)

// mapArray.forEach(element => {
//     addMoviesToDom(element)
// });

const filterMovies = (wordInMoviesTitle) => {
    movies.map(item => {
        let titleLowerCase = (item.Title.toLowerCase())
        if (titleLowerCase.includes(wordInMoviesTitle)){
            addMoviesToDom(item.Poster, item.Title,  item.imdbID)
        }
    })
}

const filterLatestMovies = (wordInMoviesTitle) => {

    movies.map(item => {
        const yearNumber = Number(item.Year)
        if (yearNumber > wordInMoviesTitle){
            addMoviesToDom(item.Poster, item.Title, item.imdbID)
        } 
    } )
}

const resetDom = (text) => {
    filmList.innerHTML = ""
    mainSectionTitle.textContent = text
}


searchBalk.addEventListener('input', (event) => {
    resetDom("Search films")
    filterMovies(event.target.value)
    console.log(event.target.value)
    radio.forEach(item => {
        if (item.checked) {
            item.checked = false
        }})
    })