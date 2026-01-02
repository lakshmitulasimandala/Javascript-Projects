let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");

const spinnerEl = document.getElementById("spinner");

function createAndAppendResult(result){

    let {title, link, description} = result;

    //creating results element
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("mb-5");

    //appending it to the main container
    searchResultsEl.appendChild(resultItemEl);


    //creating title element
    let titleEl = document.createElement("a");
    titleEl.href = result.link;
    titleEl.textContent = result.title;
    titleEl.target = "_blank";
    titleEl.classList.add("result-title", "text-primary");
    resultItemEl.appendChild(titleEl);


    // creating br element 
    let brEl = document.createElement("br");
    resultItemEl.appendChild(brEl);


    //creating url element
    let urlEl = document.createElement("a");
    urlEl.href = result.link;
    urlEl.textContent = result.link;
    urlEl.target = "_blank";
    urlEl.classList.add("result-url");
    resultItemEl.appendChild(urlEl);


    //creating decription elelemt 
    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = result.description;
    descriptionEl.classList.add("result-description");
    resultItemEl.appendChild(descriptionEl);

}

function displayResults(searchResults){
    spinnerEl.classList.toggle("d-block")
    for(let result of searchResults){
        createAndAppendResult(result);
    }
}

function searchWikipedia(event) {
    if(event.key === "Enter"){
        spinnerEl.classList.toggle("d-block")
        searchResultsEl.textContent = "";
        let searchInput = searchInputEl.value;
        //console.log(searchInput)
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        //console.log(url);
        let options = {
            method: "GET"
        }
        fetch(url, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            const {search_results} = jsonData;
            displayResults(search_results);
        })
    }
}


searchInputEl.addEventListener("keydown", searchWikipedia);