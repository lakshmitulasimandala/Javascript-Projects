let userInput = document.getElementById("searchInput");
let resultCountriesContainer = document.getElementById("countiresContainer");
let spinnerEl = document.getElementById("spinner");
let countriesData = [];

function displayCountries(data) {
    spinnerEl.classList.remove("d-block");

    let {
        flag,
        name,
        population
    } = data;

    let cardContainer = document.createElement("div");
    cardContainer.classList.add("country-card", "d-flex", "flex-row", "col-12", "col-md-6");
    resultCountriesContainer.appendChild(cardContainer);

    let imgElem = document.createElement("img");
    imgElem.src = flag;
    imgElem.classList.add("country-flag", "mr-4");
    cardContainer.appendChild(imgElem);

    let subContainer = document.createElement("div");
    subContainer.classList.add("d-flex", "flex-column");
    cardContainer.appendChild(subContainer);

    let nameElem = document.createElement("p");
    nameElem.classList.add("country-name");
    nameElem.textContent = name;
    subContainer.appendChild(nameElem);

    let populnElem = document.createElement("p");
    populnElem.classList.add("country-population");
    populnElem.textContent = population;
    subContainer.appendChild(populnElem);
}

function getData() {
    let countryConfig = {
        method: "GET"
    };

    fetch("https://apis.ccbp.in/countries-data", countryConfig)
        .then(function(response) {
            return response.json();
        })
        .then(function(arrayData) {
            countriesData = arrayData;
            spinnerEl.classList.add("d-block");
            for (let each of arrayData) {
                displayCountries(each);
            }
        });
}

getData();

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        resultCountriesContainer.innerHTML = "";

        let value = userInput.value.toLowerCase();
        let foundValue = countriesData.filter(function(each) {
            return each.name.toLowerCase().includes(value);
        });
        if (foundValue.length === 0) {
            console.log("not found");
        } else {
            for (let each of foundValue) {
                displayCountries(each);
            }
        }
    }
})