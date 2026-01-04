let myFormEl = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let formStatusEl = document.getElementById("formStatus");

let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: ""
};


let workingStatusEl = document.getElementById("status");
workingStatusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
});


let genderMaleEl = document.getElementById("male");
genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

let genderFemaleEl = document.getElementById("female");
genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});


function submitFormData(formData){
    //Doing POST resquest 
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization : "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f"
        },
        body: JSON.stringify(formData)
    }

    let url = "https://gorest.co.in/public-api/users";

    fetch(url, options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
        if (jsonData.code === 422){
            if(jsonData.data[0].message === "has already been taken"){
                emailErrMsgEl.textContent = "Email already exists*";
            }
        }

    })
}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault(); // idhi default form submission behavior ni prevent chesthundi
    submitFormData(formData);
    formStatusEl.textContent = "Form Submitted Successfully!";
});

nameEl.addEventListener("blur", function(event) {
    ///console.log("Name field lost focus");
    if(event.target.value === ""){
        nameErrMsgEl.textContent = "Name is required*";
    }
    else{
        nameErrMsgEl.textContent = "";
    }
    formData.name = event.target.value;
});

emailEl.addEventListener("blur", function(event) {
    if(event.target.value === ""){
        emailErrMsgEl.textContent = "Email is required*";
    }
    else{
        emailErrMsgEl.textContent = "";
    }
    formData.email = event.target.value;
});